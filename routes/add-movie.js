const addMovies = require('express').Router();
const db = require('../database');

addMovies.post('/', (req, res) => {
  console.log(req.body);

  const { name } = req.body;
  console.log(name)

  if (req.body) {
    const newMovie = {
      name
    };
    insertToDb(newMovie)
}
}
);

function insertToDb(movie) {
  db.query("INSERT INTO movies (movie_name) VALUES (?)", [movie.movie_name], function(err, res) {
        if (err) throw err;
        console.log(res);
      });
}

module.exports = addMovies;
