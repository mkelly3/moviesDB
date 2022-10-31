const movies = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

movies.get('/', (req, res) => {
  readFromFile('./db/movies.db').then((data) => res.json(JSON.parse(data)));
});

module.exports = movies;