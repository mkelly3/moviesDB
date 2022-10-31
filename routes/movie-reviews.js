
const db = require('../database');
const moviesReviews = require('express').Router();

moviesReviews.get('/', (req, res) => {
  db.query(`SELECT movies.name AS name, review as review
  FROM reviews
  JOIN movies on movies.id = reviews.movies`,function(err, results){
    console.table(results)
    res.json(results)
  })
});

module.exports = moviesReviews;