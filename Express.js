const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
 
const stringifiedData = fs.readFileSync("mockData.json", "utf-8");
 
const data = JSON.parse(stringifiedData);
 
 
app.get("/user", function (req, res) {
  res.send({ data });
});

app.get("/users", function (request, response) {
  response.send("ene bol res");
});
 
app.post("/login", (req, response) => {
  const body = req.body;
 
  const loginUser = data.find((user) => user.name === body.name);
 
  if (loginUser === undefined) {
    response.send("user not found");
  } else {
    response.send(loginUser);
  }
});
 
app.post("/signUp", (request, response) => {
  data.push({
    id: String(data.length + 1),
    name: request.body.name,
  });
  fs.writeFileSync("mockData.json", JSON.stringify(data));
  response.send("Successfully signed up");
});
 
app.delete("/deleteUser", (req, response) => {
  console.log(req.body.name);
  const uldsenData = data.filter((user) => user.name !== req.body.name);
 
  fs.writeFileSync("mockData.json", JSON.stringify(uldsenData));
  response.send("Amjilltai ustgalaa");
});
 
app.get("/search", (req, response) => {
  const oldsonHun = data.find((user) => user.name === req.body.name);
 
  if (oldsonHun === undefined) {
    response.send("oldsongue");
  } else {
    response.send("oldsonHun");
  }
});



// app.listen(3000, () => {
// });
