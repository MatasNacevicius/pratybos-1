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

module.exports = createDirector;
