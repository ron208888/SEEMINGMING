const express = require("express");
const app = express();
const multer = require("multer");
const AWS = require("aws-sdk");
const mysql = require("mysql");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const uuid = require("uuid");

require("dotenv").config();
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
