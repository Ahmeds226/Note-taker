const express = require("express");
const path = require("path");
const router = express.Router();

//Check routes
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Check routes
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;
