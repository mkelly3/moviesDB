const reviews = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

reviews.get('/', (req, res) => {
  readFromFile('./db/movies.db').then((data) => res.json(JSON.parse(data)));
});

reviews.post('/', (req, res) => {
  console.log(req.body);


  if (req.body) {
    const newTip = {
    
    };

    readAndAppend(newMovie, './db/movies.db');
    res.json(`Review added successfully 🚀`);
  } else {
    res.error('Error in adding review');
  }
});

module.exports = reviews;