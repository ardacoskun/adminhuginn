const Network = require("../models/Network");

//Get All Networks
const getAllNetworks = async (req, res) => {
  try {
    const networks = await Network.find();
    res.status(200).json(networks);
  } catch (error) {
    res.status(500).json("Something went wrong!");
  }
};

//Create Network
const createNetwork = async (req, res) => {
  try {
    const newNetwork = await Network.create(req.body);
    res.status(200).json(newNetwork);
  } catch (error) {
    return res.status(500).send("Something went wrong!");
  }
};

//Update Network
const updateNetwork = async (req, res) => {
  try {
    const updateNetwork = await Network.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateNetwork);
  } catch (error) {
    res.status(500).json("Something went wrong!");
  }
};

//Get Network
const getNetwork = async (req, res) => {
  try {
    const network = await Network.findById(req.params.id);
    res.status(200).json(network);
  } catch (error) {
    res.status(500).json("Something went wrong!");
  }
};

//Delete Network
const deleteNetwork = async (req, res) => {
  try {
    const network = await Network.findByIdAndDelete(req.params.id);
    res.status(200).json("Network has been deleted...");
  } catch (error) {
    res.status(500).json("Something went wrong!");
  }
};

module.exports = {
  createNetwork,
  updateNetwork,
  getNetwork,
  deleteNetwork,
  getAllNetworks,
};
