const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('tasty-meals');
const userCollection = db.collection('user');
const postCollection = db.collection('post');

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

async function addUser(user) {
  await userCollection.insertOne(user);
}

function getUser(username) {
  return userCollection.findOne({ username: username });
}

 function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function updateUser(user) {
  await userCollection.updateOne({username: user.username}, {$set: user});
}

async function updateUserRemoveAuth(user) {
  await userCollection.updateOne({username: user.username}, {$unset: {token: 1}});
}

 function getPosts() {
  return postCollection.find().sort({ _id: -1 }).limit(8).toArray();
}

async function addPost(post) {
  await postCollection.insertOne(post);
}

async function addLike(id) {
  const post = await postCollection.findOne({ id: id });
  if (post) {
    post.likes += 1;
    await postCollection.updateOne({ id: id }, { $set: { likes: post.likes } });
  } 
}

async function addFavorite(id, user) {
  const post = await postCollection.findOne({ id: id });
  if (post) {
    await userCollection.updateOne({ username: user.username }, { $addToSet: { favorites: { id: post.id, name: post.name, plan: post.plan } } });
  }     
}

async function getFavorites(username) {
    const userFavorites = await userCollection.findOne({username: username}, { projection: { favorites: {$slice: -8}, _id: 0 } });
    return userFavorites ? userFavorites.favorites : [];w

}

module.exports = {
  addUser,
  getUser,
  updateUser,
  updateUserRemoveAuth,
  getUserByToken,
  getPosts,
  addPost,
  addLike,
  addFavorite,
  getFavorites
};