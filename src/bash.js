const express = require("express");
const app = express();
const exec = require("child_process").exec;

//get home page
app.get("/", (req, res) => {
  exec("cd C:/Users/Pavilion & dir", (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
  console.log("adfdfa");
  res.send("Done");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("listening on port 3000");
});
