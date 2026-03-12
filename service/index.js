const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

let users = [];
let posts = [];
let favorites = [];

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

let apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('username', req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.username, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ username: user.username });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('username', req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      setAuthCookie(res, user.token);
      res.send({ username: user.username });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// GetPosts
apiRouter.get('/posts', verifyAuth, (_req, res) => {
  res.send(posts);
});

// CreatePost
apiRouter.post('/posts', verifyAuth, (req, res) => {
  posts = updatePosts(req.body);
  res.send(posts);
});

// AddLike
apiRouter.post('/posts/like', verifyAuth, (req, res) => {
  const updatedPost = updateLikes(req.body.id);
  res.send(updatedPost);
});

// GetFavorites
apiRouter.get('/favorites', verifyAuth, (_req, res) => {
  res.send(favorites);
});

// CreateFavorite
apiRouter.post('/favorites', verifyAuth, (req, res) => {
  favorites = updateFavorites(req.body.id);
  res.send(favorites);
});


// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

async function createUser(username, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    token: uuid.v4(),
  };
  users.push(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] === value);
}

function updatePosts(newPost) {
  posts.splice(0, 0, newPost);
  if (posts.length > 10) {
    posts.length = 10;
  }
  return posts;
}

function updateLikes(id) {
  const post = posts.find((p) => p.id === id);
  if (post) {
    post.likes += 1;
  }
  return post;
}

function updateFavorites(id) {
  const post = posts.find((p) => p.id === id);
  if (post) {
    favorites.splice(0, 0, post);
    if (favorites.length > 10) {
      favorites.length = 10;
    }
  }
  return favorites;
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});