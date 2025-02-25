const express = require("express");
const { updateNote } = require("../controllers/note.controller");
const authenticateToken = require("../middlewares/auth.middleware");

const router = express.Router();

router.put("/edit-note/:noteId", authenticateToken, updateNote);

module.exports = router;
