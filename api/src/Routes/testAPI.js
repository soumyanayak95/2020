var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const exec = require("child_process").exec;

var app = express();

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());

router.get("/", function (req, res, next) {
  res.send("API is working properly in the GET method gdfgdgdg");
});

router.get("/test", function (req, res, next) {
  res.send({ text: "testAPI/test method" });
});

//bash script execute
const X = "this is a param";

router.get("/bash", function (req, res, next) {
  exec("./bash.sh", (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });

  res.send("Bash script executed here");
});

router.post("/", urlencodedParser, function (req, res) {
  console.log(req.body.url + " <- this is request body!!!!!!!");
  res.send("response string from node");

  exec("bash.sh", (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });

  //res.send("Bash script executed here");
});

module.exports = router;
