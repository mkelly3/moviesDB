const movies = require('express').Router();
const db = require('../database');

movies.get('/', (req, res) => {
  db.query('Select * from movies',function (err, results) {
    console.table(results);
  });
});



module.exports = movies;