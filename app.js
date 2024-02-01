const connectingToDB = require("./config/db");
const express = require("express");

require("dotenv").config();

connectingToDB();
const app = express();

app.use(express.json());

const {
  createDirector,
  getDirectorWithMovies,
  deleteDirector,
} = require("./controllers/directorController");
const {
  createMovie,
  getMovies,
  getFullInfoAboutMovie,
  updateMovie,
  deleteMovie,
} = require("./controllers/movieController");

app.post("/api/director", createDirector);
app.post("/api/movies", createMovie);
app.get("/api/movies", getMovies);
app.get("/api/movies/full", getFullInfoAboutMovie);
app.get("/api/director/full", getDirectorWithMovies);
app.put("/api/movie/update/:id", updateMovie);
app.delete("/api/movie/delete/:id", deleteMovie);
app.delete("/api/director/delete/:id", deleteDirector);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
