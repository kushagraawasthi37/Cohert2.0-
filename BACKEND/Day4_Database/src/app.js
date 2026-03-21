const express = require("express");
const { constrainedMemory } = require("process");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/notes", (req, res) => {
  console.log(req.body);
});
module.exports = app;

//Varible store the value in the RAM
/* 
Cluster=> storage+ Processor

Database and neetwork access

database>> RBAC
ADMIN-> CRUD


*/
