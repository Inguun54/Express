const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

const stringifiedData = fs.readFileSync("mockData.json", "utf-8");

const data = JSON.parse(stringifiedData);

const functPass = (req, res, next) => {
  if (data === req.body) {
    res.send("nevterlee");
  }
  next();
};

app.post("/password", functPass, (req, res) => {
  res.send("harij unt");
});

// app.listen(3000)
