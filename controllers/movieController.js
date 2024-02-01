const Movie = require("../models/movie");

const createMovie = async (req, res) => {
  if (
    !req.body.movieDirector ||
    !req.body.title ||
    !req.body.year ||
    !req.body.profits ||
    !req.body.genre
  ) {
    res.status(404).send("fill inputs");
  }

  const existingMovie = await Movie.findOne({ title: req.body.title });
  if (existingMovie) {
    return res.status(409).send("Movie already exist in database");
  }

  const movie = await Movie.create({
    movieDirector: req.body.movieDirector,
    title: req.body.title,
    year: req.body.year,
    profits: req.body.profits,
    genre: req.body.genre,
  });

  res.status(200).json(movie);
};

const getMovies = async (req, res) => {
  const moviesFromDB = await Movie.find();
  console.log(moviesFromDB);
  if (!moviesFromDB) {
    res.status(404).send("book not found");
    return;
  }
  res.status(200).json(moviesFromDB);
};

const getFullInfoAboutMovie = async (req, res) => {
  const moviesFromDB = await Movie.find().populate(
    "movieDirector",
    "firstname lastname origin oscars id date"
  );

  if (!moviesFromDB) {
    res.status(404).send("movie not found");
    return;
  }

  res.status(200).json(moviesFromDB);
};

const updateMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) {
    res.status(404).send("movie not found");
  }
  movie.title = req.body.title;
  const result = await movie.save();
  console.log(result);

  res.status(200).json(result);
};

const deleteMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) {
    res.status(404).send("Movie not found");
    return;
  }
  const result = await Movie.deleteOne({ _id: req.params.id });
  res.status(200).send(result);
};

module.exports = {
  createMovie,
  getMovies,
  getFullInfoAboutMovie,
  updateMovie,
  deleteMovie,
};
