const express = require('express');

const addMovies = require('./add-movies');
const movieReviews = require('./movie-reviews');
const movies = require('./movies');
const review = require('./review');

const app = express();

app.use('/movies', movies);
app.use('/movieReviews', movieReviews);
app.use('/review', review);
app.use('/addMovies', addMovies);


module.exports = app;