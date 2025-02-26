const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];

  const bearerToken = token.split(" ")[1];
  if (!bearerToken) return res.sendStatus(403);

  jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

/*
Middleware authorization içerisinden token alıyor. 
Alınan token token.plit(" ") methodu ile bearer <token> gelen değeri düzelterek sadece tokenı alıyor.
eğer token yoksa 403  uyarısı döndürüyoruz. 
token doğru ve .env içerisindeki ACCESS_TOKEN_SECRET eşleşirse req.user içerisine user bilgilerini atıyoruz.
ve next ile sıradaki middleware çalışacak şekilde çıkış yapıyoruz. 
*/
