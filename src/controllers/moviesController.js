const Movies = require('../models/movies');

const getMovies = async (req, res) => {
  try {
    const result = await Movies.find();
    res.json(result);
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error,
    });
  }
};

module.exports = { getMovies };
