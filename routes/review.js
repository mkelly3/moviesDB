const reviews = require('express').Router();
const db = require('../database');

reviews.put('/:id', (req, res) => {
  const {review} = req.body
  if (req.params.id && review) {
      db.query("UPDATE reviews set review = ? where id = ?", [review, req.params.id], function(err, table) {
          if (err) throw err;
          res.json(table)
        });
  }
})

module.exports = reviews;