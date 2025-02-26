const Note = require("../models/note.model");

exports.addNote = async (req, res) => {
  const { title, content, tags } = req.body;
  if (!title || !content)
    return res
      .status(400)
      .json({ error: true, message: "Title and Content are required" });

  try {
    const note = new Note({
      title,
      content,
      tags: tags || [],
      userId: req.user.userId,
    });
    await note.save();
    return res.json({ error: false, note, message: "Note added successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
};

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.userId }).sort({
      isPinned: -1,
    });
    return res.json({
      error: false,
      notes,
      message: "All notes retrieved successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
};

exports.editNote = async (req, res) => {
  const noteId = req.params.noteId;
  const updatedData = req.body;

  try {
    const updatedNote = await Note.findByIdAndUpdate(noteId, updatedData, {
      new: true,
    });
    if (!updatedNote) {
      return res.status(404).json({ error: true, message: "Note not found" });
    }
    return res.status(200).json({
      error: false,
      note: updatedNote,
      message: "Note updated successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
};

exports.deleteNote = async (req, res) => {
  const noteId = req.params.noteId;

  try {
    const deletedNote = await Note.findByIdAndDelete(noteId);
    if (!deletedNote) {
      return res.status(404).json({ error: true, message: "Note not found" });
    }
    return res
      .status(200)
      .json({ error: false, message: "Note deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
};

exports.searchNotes = async (req, res) => {
  const { query } = req.query; // Arama kelimesini al

  try {
    const notes = await Note.find({
      userId: req.user.userId,
      $or: [
        { title: { $regex: query, $options: "i" } }, // Başlıkta arama
        { content: { $regex: query, $options: "i" } }, // İçerikte arama
      ],
    }).sort({ isPinned: -1 });

    return res.json({
      error: false,
      notes,
      message: "Notes retrieved successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
};

exports.pinNote = async (req, res) => {
  const noteId = req.params.noteId;

  try {
    const note = await Note.findById(noteId);
    if (!note) {
      return res.status(404).json({ error: true, message: "Note not found" });
    }

    note.isPinned = !note.isPinned; // Pin durumunu tersine çevir
    await note.save();

    return res.status(200).json({
      error: false,
      note,
      message: "Note pin status updated successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
};
