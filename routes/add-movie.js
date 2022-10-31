const addMovies = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

addMovies.get('/', (req, res) => {
  readFromFile('./db/schema.sql').then((data) => res.json(JSON.parse(data)));
});

addMovies.post('/', (req, res) => {
  console.log(req.body);


  if (req.body) {
    const newTip = {
    
    };

    readAndAppend(newMovie, './db/schema.sql');
    res.json(`Movie added successfully 🚀`);
  } else {
    res.error('Error in adding movie');
  }
});

module.exports = addMovies;
