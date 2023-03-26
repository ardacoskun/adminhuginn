const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    jwt.verify(token, process.env.JWT_KEY, (error, user) => {
      if (error) return res.status(403).json("Invalid Token!");
      req.user = user;
      next();
    });
  }
  return res.status(401).json("You are not authenticated!");
};

module.exports = { verifyToken };
