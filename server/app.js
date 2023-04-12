const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const path = require("path");

const client = require("../db/client");
client.connect();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.use("/api", require("./api"));

app.use((err, req, res, next) => {
  console.error(err);
  res.send({
    name: err.name,
    message: err.message,
    stack: err.stack,
  });
});

module.exports = app;
