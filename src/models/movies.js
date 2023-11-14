const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moviesSchema = new Schema(
  {
    title: { type: String },
    genre: { type: String },
    image: { type: String },
    category: { type: String },
    date: { type: Date },
  },
  { collection: 'movies' }
);
const Movies = mongoose.model('movies', moviesSchema);
module.exports = Movies;
