const Director = require("../models/directors");

const createDirector = async (req, res) => {
  if (
    !req.body.firstname ||
    !req.body.lastname ||
    !req.body.origin ||
    !req.body.oscars
  ) {
    res.status(404).send("fill inputs");
  }

  const director = new Director({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    origin: req.body.origin,
    oscars: req.body.oscars,
  });

  const result = await director.save();
  res.status(200).send(result);
};

const getDirectorWithMovies = async (req, res) => {
  const directorWithMovies = await Director.aggregate([
    {
      $lookup: {
        from: "movies",
        localField: "_id",
        foreignField: "movieDirector",
        as: "Movies",
      },
    },
  ]);
  if (!directorWithMovies) {
    res.status(404).send("director not found");
    return;
  }
  res.status(200).send(directorWithMovies);
};

const deleteDirector = async (req, res) => {
  const director = await Director.findById(req.params.id);

  if (!director) {
    res.status(404).send("director not found");
    return;
  }
  const result = await Director.deleteOne({ _id: req.params.id });
  res.status(200).send(result);
};

module.exports = { createDirector, getDirectorWithMovies, deleteDirector };
