const express = require("express");
const path = require("path");
const router = express.Router();

//Check routes
router.get("/notes", (req, res) => {
  console.log("notes route");
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//Check routes
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
