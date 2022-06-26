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

module.exports = router;
