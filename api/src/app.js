var express = require("express");
var router = express.Router();
var path = require("path");
var cors = require("cors");
var deploy = require("./Routes/deploy");
var app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/deploy", deploy);

const port = 5000;
app.listen(port, () => {
  console.log("listening on port 5000");
});

module.exports = app;
