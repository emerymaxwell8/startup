const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('tasty-meals');
const userCollection = db.collection('user');
const postCollection = db.collection('post');
const favoriteCollection = db.collection('favorite');

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
  return postCollection.find().limit(8).toArray();
}