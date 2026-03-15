const express = require("express");
const { describe } = require("node:test");
const { totalmem } = require("os");
const { execArgv } = require("process");

const app = express();

//For getting the data from the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const notes = [];

app.post("/create-note", (req, res) => {
  console.log(req.body);
  const { title, description } = req.body;

  if (!title.trim() || !description.trim()) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }

  const note = {
    title: title,
    description: description,
  };

  notes.push(note);
  return res.status(201).json({ message: "Note is created successfully" });
});

app.get("/get-notes", (req, res) => {
  return res.send(notes);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
