const express = require("express");
const {
  addNote,
  editNote,
  getAllNotes,
  deleteNote,
  searchNotes,
  pinNote,
} = require("../controllers/note.controller");
const authenticateToken = require("../middlewares/auth.middleware");

const router = express.Router();

// Add new note
router.post("/add-note", authenticateToken, addNote);

// Edit an existing note
router.put("/edit-note/:noteId", authenticateToken, editNote);

// Get all notes for a specific user
router.get("/", authenticateToken, getAllNotes);

// Delete a note
router.delete("/:noteId", authenticateToken, deleteNote);

// Search notes
router.get("/search", authenticateToken, searchNotes);

// Pin a note
router.put("/pin/:noteId", authenticateToken, pinNote);

module.exports = router;
