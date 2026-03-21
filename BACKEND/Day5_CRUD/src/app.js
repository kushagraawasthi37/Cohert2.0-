const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//   "mongodb+srv://Kushagra_note_admin:55SoCWJB5IDUiKEx@cluster0.1dv3fk7.mongodb.net/?appName=CRUD_oeration",

module.exports= app;
