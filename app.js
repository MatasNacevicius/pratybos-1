const connectingToDB = require("./config/db");
const express = require("express");

require("dotenv").config();

connectingToDB();
const app = express();

app.use(express.json());

const createDirector = require("./controllers/directorController");

app.post("/api/director", createDirector);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
