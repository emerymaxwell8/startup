const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const app = express();

app.use(express.json());

let users = [];
let posts = [];

let apiRouter = express.Router();
app.use(`/api`, apiRouter);

const port = process.argv.length > 2 ? process.argv[2] : 3000;

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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});