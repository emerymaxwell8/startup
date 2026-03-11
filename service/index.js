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

app.get(/.*/, (_req, res) => {
  res.send({ msg: 'Simon service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});