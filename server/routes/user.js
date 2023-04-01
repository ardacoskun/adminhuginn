const router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const {
  updateUser,
  deleteUser,
  getUser,
} = require("../controllers/userController");

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateUser);
//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);
//GET USER
router.get("/find/:id", verifyTokenAndAdmin, getUser);

module.exports = router;
