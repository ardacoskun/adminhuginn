const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //Check if user exists
    const userExists = await User.findOne({ email: email.toLowerCase() });

    if (userExists) {
      return res.status(409).json("Email already taken.");
    }

    //Encrypt Password
    const encryptedPassword = await bcrypt.hash(password, 10);

    //Create user document and save it to database
    const newUser = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
      isAdmin: true,
    });

    //Create JWT Token
    const token = jwt.sign(
      {
        userId: newUser._id,
        email,
        isAdmin: true,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "24h",
      }
    );

    res.status(201).json({
      userDetails: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        isAdmin: true,
        token,
      },
    });
  } catch (error) {
    return res.status(500).send("Something went wrong!");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(404).send("No such user was found.");
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (user && comparePassword) {
      //Send new token
      const token = jwt.sign(
        {
          userId: user._id,
          email,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "24h",
        }
      );

      return res.status(200).json({
        userDetails: {
          id: user._id,
          username: user.username,
          email: user.email,
          isAdmin: user.isAdmin,
          token,
        },
      });
    }
    return res.status(401).send("Wrong credentials.Please try again.");
  } catch (error) {
    return res.status(500).send("Something went wrong!");
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.clearCookie("user");
  return res.status(200).send("Logged out");
};
module.exports = { register, login, logout };
