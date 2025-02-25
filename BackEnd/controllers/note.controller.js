const Note = require("../models/note.model");

const updateNote = async (req, res) => {
  try {
    const { noteId } = req.params;
    const { title, content, tags, isPinned } = req.body;
    const userId = req.user.id;

    const note = await Note.findOne({ _id: noteId, userId });

    if (!note) {
      return res.status(404).json({ error: true, message: "Note not found" });
    }

    if (title) note.title = title;
    if (content) note.content = content;
    if (tags) note.tags = tags;
    if (isPinned !== undefined) note.isPinned = isPinned;

    await note.save();

    return res.json({
      error: false,
      note,
      message: "Note updated successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal server error" });
  }
};

module.exports = { updateNote };
