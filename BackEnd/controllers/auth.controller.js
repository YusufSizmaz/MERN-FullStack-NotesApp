const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.createAccount = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res
      .status(400)
      .json({ error: true, message: "All fields are required" });
  }

  const isUser = await User.findOne({ email });
  if (isUser) {
    return res.json({ error: true, message: "User already exists" });
  }

  const user = new User({ fullName, email, password });
  await user.save();

  const accessToken = jwt.sign(
    { userId: user._id },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "10h" }
  );

  return res.json({
    error: false,
    user,
    accessToken,
    message: "Registration Successful",
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Email ve şifre kontrolü
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: true, message: "Email and password are required" });
  }

  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res
      .status(400)
      .json({ error: true, message: "Invalid credentials" });
  }

  const accessToken = jwt.sign(
    { userId: user._id },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "10h" }
  );

  return res.json({
    error: false,
    message: "Login Successful",
    email,
    accessToken,
  });
};

exports.getUser = async (req, res) => {
  const user = await User.findById(req.user.userId);
  if (!user) return res.sendStatus(401);

  return res.json({
    user: { fullName: user.fullName, email: user.email, _id: user._id },
  });
};
