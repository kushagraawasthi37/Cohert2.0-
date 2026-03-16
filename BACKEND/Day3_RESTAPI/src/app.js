const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let notes = [];

app.get("/mynotes", (req, res) => {
  return res.json({ notes });
});

app.post("/create-note", (req, res) => {
  const { title, description } = req.body;

  //   console.log(notes);

  if (!title.trim() || !description.trim()) {
    return res
      .status(400)
      .json({ message: "Title and description can't be empty" });
  }

  const newNote = {
    id: notes.length + 1,
    title,
    description,
  };

  notes.push(newNote);

  //   console.log(notes);

  return res
    .status(201)
    .json({ message: "Note created successfully", note: newNote });
});

app.delete("/delete-note/:id", (req, res) => {
  const { id } = req.params;

  if (id > notes.length) {
    return res.status(404).json({ message: "Note not found" });
  }

  notes = notes
    .map((note) => {
      if (note.id === Number(id)) {
        return null;
      }
      return note;
    })
    .filter((note) => note !== null);

  return res.status(200).json({ message: "Note deleted successfully" });
});

app.patch("/update-note/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  if (id > notes.length) {
    return res.status(404).json({ message: "Note not found" });
  }

  notes = notes.map((note) => {
    if (note.id === Number(id)) {
      return { ...note, title };
    }
    return note;
  });

  return res.status(200).json({ message: "Note updated successfully" ,notes});
});

module.exports = app;
