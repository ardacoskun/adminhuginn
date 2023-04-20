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
// router.get("/", verifyTokenAndAdmin, getAllNetworks);
router.get("/", getAllNetworks);

//CREATE NETWORK
// router.post("/create", verifyTokenAndAdmin, createNetwork);
router.post("/create", createNetwork);

//GET NETWORK
// router.get("/:id", verifyTokenAndAdmin, getNetwork);
router.get("/:id", getNetwork);

//UPDATE NETWORK
// router.put("/:id", verifyTokenAndAdmin, updateNetwork);
router.put("/:id", updateNetwork);

//DELETE NETWORK
// router.delete("/:id", verifyTokenAndAdmin, deleteNetwork);
router.delete("/:id", deleteNetwork);

module.exports = router;
