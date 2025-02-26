require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const noteRoutes = require("./routes/note.routes");
const authRoutes = require("./routes/auth.routes");
const config = require("./config/db");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// Rotalar
app.use("/api/notes", noteRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ data: "Hello" });
});

// MongoDB Bağlantısı
mongoose
  .connect(config.connectionString)
  .then(() => console.log("Database bağlantısı sağlandı. ⭐️⭐️⭐️  "))
  .catch((err) => console.error("DB Connection Error: 🦀", err));

app.listen(8000, () => {
  console.log("Server çalıştı. Port:8000 ⚡️⚡️");
});

module.exports = app;
