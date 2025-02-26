const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];

  const bearerToken = token.split(" ")[1];
  if (!bearerToken) return res.sendStatus(403); // Eğer token yoksa, 403 dön

  jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
