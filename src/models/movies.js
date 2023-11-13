const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moviesSchema = new Schema(
  {
    title: String,
    genre: String,
    image: String,
    category: String,
    date: String,
  },
  { collection: 'movies' }
);
const Movie = mongoose.model('movies', moviesSchema);
module.exports = Movie;