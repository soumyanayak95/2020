var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var isGitUrl = require('is-git-url');
const spawn = require("child_process").spawn;
var shell = require("shelljs");
const { exec } = require("child_process");

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());

router.get("/test", function (req, res, next) {
  res.send({ text: "testAPI/test method" });
});


router.post("/", urlencodedParser, function (req, res) {
  const url = req.body.url;
  console.log(url);

  try{
    if ( !isGitUrl(url) ){
      console.log("Invalid Git url!!!")
      throw new Error("Invalid Git url");
    }else{
      // const ls = spawn("git", ['clone', url]);
      // ls.stdout.on("data", (data) => console.log("data", data.toString('utf-8')));
      // ls.stderr.on('data', (data) => {
      //     console.error(`stderr: ${data}`)
      // });
      // ls.on('close', (code) => {
      //     console.log(`child process exited with code ${code}`);
      // });

      // echo url in bash script
      exec("bash.sh " + `'${url}'` , (err, stdout, stderr) => {
        if (err){
          console.error(err);
        }
        console.log(stdout)
      });

      res.send(url);
    }
  }catch(e){
    res.status(500).send("Invalid Git url");
  }

});

module.exports = router;
