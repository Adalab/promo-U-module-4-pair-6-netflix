const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const actorsSchema = new Schema(
  {
    name: String,
    lastname: String,
    country: String,
    birthday: Date,
  },
  { collection: 'actors' }
);
const Actor = mongoose.model('actors', actorsSchema);
module.exports = Actor;