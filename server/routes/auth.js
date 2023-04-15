const router = require("express").Router();
const {
  register,
  login,
  logout,
  getCurrentUser,
} = require("../controllers/authController");
const { verifyToken } = require("../middleware/verifyToken");

//REGISTER
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/getCurrentUser", verifyToken, getCurrentUser);

module.exports = router;
