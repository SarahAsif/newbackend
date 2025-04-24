require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello Twitter!");
});
app.get("/login", (req, res) => {
  res.send("<h1>Hi there login</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h1>Hi there youtube</h1>");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
