const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

// Middlewares
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

// Imported routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

// connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB!")
);

// Listen to server
app.listen(port);
