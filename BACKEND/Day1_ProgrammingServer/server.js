const express = require("express");

const app = express(); //Server instance create karna

//User / par jab request karega to hello world response jayega
app.get("/", (req, res) => {
  res.send("Hello bro! how are You ");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
