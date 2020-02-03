const express = require("express");
const app = express();
const exec = require("child_process").exec;
const { spawn } = require("child_process");
//const bat = spawn("cmd.exe", ["/c", "demo.bat"]);
//const x = require("./demo.bat");

//get home page
var X = "this is a param";

app.get("/", (req, res) => {
  exec("bash.sh " + X, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });

  // bat.stdout.on("data", data => {
  //   console.log(`stdout: ${data}`);
  // });

  // bat.stderr.on("data", data => {
  //   console.error(`stderr: ${data}`);
  // });

  res.send("Done");
});

const port = 5000;

app.listen(port, () => {
  console.log("listening on port 5000");
});
