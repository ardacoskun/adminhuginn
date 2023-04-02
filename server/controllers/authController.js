const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const register = async (req, res) => {
  try {
    const { username, email, password, isAdmin } = req.body;

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
      isAdmin,
    });

    //Create JWT Token
    const token = jwt.sign(
      {
        userId: newUser._id,
        email,
        isAdmin,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "24h",
      }
    );

    res.status(201).json({
      userDetails: {
        username: newUser.username,
        email: newUser.email,
        token,
        isAdmin,
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
          username: user.username,
          email: user.email,
          token,
          isAdmin: user.isAdmin,
        },
      });
    }
    return res.status(401).send("Wrong credentials.Please try again.");
  } catch (error) {
    return res.status(500).send("Something went wrong!");
  }
};

module.exports = { register, login };
