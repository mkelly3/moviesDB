const reviews = require('express').Router();
const db = require('../database');

reviews.put('/:id', function (req, res) {
  db.query(`UPDATE review WHERE movies = $id`, function (err, results) {
    console.table(results);
  });
 
});

module.exports = reviews;