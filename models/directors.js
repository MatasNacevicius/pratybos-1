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

const Directors = mongoose.model("Directors", directorSchema);

module.exports = Directors;
