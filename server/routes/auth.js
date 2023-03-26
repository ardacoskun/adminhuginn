const router = require("express").Router();
const { register, login } = require("../controllers/authController");

//REGISTER
router.post("/register", register);
router.post("/login", login);

module.exports = router;
