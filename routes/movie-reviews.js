const moviesReviews = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

moviesReviews.get('/', (req, res) => {
  readFromFile('./db/movies.db').then((data) => res.json(JSON.parse(data)));
});

module.exports = moviesReviews;