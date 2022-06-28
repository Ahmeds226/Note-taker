const express = require("express");
const fs = require("fs");
const uniqid = require("uniqid");
const router = express.Router();

router.get("/api/notes", (req, res) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    return res.json(JSON.parse(data));
  });
});

//Adds note
router.post("/api/notes", (req, res) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    const dbData = JSON.parse(data);
    const newNote = req.body;
    const id = "id";
    const noteId = uniqid();
    newNote[id] = noteId;
    dbData.push(newNote);

    fs.writeFile("db/db.json", JSON.stringify(dbData), (err) => {
      if (err) throw err;
      return res.json(dbData);
    });
  });
});

//Deletes note
router.delete("/api/notes/:id", (req, res) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    const dbData = JSON.parse(data);
    const noteId = req.params.id;

    for (let i = 0; i < dbData.length; i++) {
      if (noteId === dbData[i].id) {
        dbData.splice([i], 1);
        fs.writeFile("db/db.json", JSON.stringify(dbData), (err) => {
          if (err) throw err;
          return res.json(dbData);
        });
      }
    }
  });
});

module.exports = router;
