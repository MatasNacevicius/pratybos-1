const mongoose = require("mongoose");

const directorSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please write your name"],
  },
  lastname: {
    type: String,
    required: [true, "Please write your lastname"],
  },
  origin: {
    type: String,
    required: [true, "Please write your country of origin"],
  },
  oscars: {
    type: Number,
    required: [true, "How many oscars do you have"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

directorSchema.virtual("movies", {
  ref: "Movie",
  localField: "_id",
  foreignField: "movieDirector",
});

const Director = mongoose.model("Director", directorSchema);

module.exports = Director;
