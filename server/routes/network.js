const router = require("express").Router();
const {
  createNetwork,
  updateNetwork,
  getNetwork,
  deleteNetwork,
  getAllNetworks,
} = require("../controllers/networkController");
const { verifyTokenAndAdmin } = require("../middleware/verifyToken");

//GET ALL NETWORKS
router.get("/", verifyTokenAndAdmin, getAllNetworks);

//CREATE NETWORK
router.post("/create", verifyTokenAndAdmin, createNetwork);

//GET NETWORK
router.get("/:id", verifyTokenAndAdmin, getNetwork);

//UPDATE NETWORK
router.put("/:id", verifyTokenAndAdmin, updateNetwork);

//DELETE NETWORK
router.delete("/:id", verifyTokenAndAdmin, deleteNetwork);

module.exports = router;
