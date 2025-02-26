const express = require("express");
const {
  createAccount,
  login,
  getUser,
} = require("../controllers/auth.controller");
const authenticateToken = require("../middlewares/auth.middleware");

const router = express.Router();

// /api/create-account route'u doğru bir şekilde router üzerinden tanımlandı.
router.post("/create-account", createAccount); // Burada app değil, router kullanmalısın
router.post("/login", login);
router.get("/get-user", authenticateToken, getUser);

module.exports = router;
