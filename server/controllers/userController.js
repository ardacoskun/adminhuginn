const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("Something went wrong!");
  }
};

const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    //Create JWT Token
    const token = jwt.sign(
      {
        userId: updatedUser._id,
        email: req.body.email,
        isAdmin: req.body.isAdmin,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "24h",
      }
    );

    return res.status(200).json({ user: updatedUser, token });
  } catch (error) {
    return res.status(500).send("Something went wrong!");
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (error) {
    res.status(500).send("Something went wrong!");
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).send("Something went wrong!");
  }
};

module.exports = { updateUser, deleteUser, getUser, getAllUsers };
