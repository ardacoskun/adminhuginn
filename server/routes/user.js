const router = require("express").Router();
const { verifyTokenAndAuthorization } = require("../middleware/verifyToken");
const { updateUser } = require("../controllers/userController");

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateUser);

module.exports = router;
