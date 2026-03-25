const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('tasty-meals');
const userCollection = db.collection('user');
const postCollection = db.collection('post');
const favoriteCollection = db.collection('favorite');