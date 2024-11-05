const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
 
const stringifiedData = fs.readFileSync("mockData.json", "utf-8");
 
const data = JSON.parse(stringifiedData);

app.post("/BookUpload", (req, res) => {

})
res.end();
 
// app.listen(3000);
 