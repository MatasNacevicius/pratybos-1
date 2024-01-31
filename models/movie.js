const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movieDirector: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Director",
  },
  title: {
    type: String,
    required: [true, "please add title"],
  },
  year: {
    type: Number,
    required: [true, "Please add year"],
  },
  profits: {
    type: Number,
    required: [true, "Please add page quantity"],
  },
  genre: {
    type: String,
    required: [true, "please add genre"],
  },
  date: { type: Date, default: Date.now },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
