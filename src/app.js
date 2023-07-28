const express = require('express');
const { Reader } = require('./models');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.post('/readers', (req, res) => {
  Reader.create(req.body).then((reader) => res.status(201).json(reader));
});

module.exports = app;
