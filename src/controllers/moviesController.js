const Movies = require('../models/movies.model');

const getMovies = async (req, res) => {
  try {
    const result = await Movies.find();
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error,
    });
  }
};

module.exports = { getMovies };
