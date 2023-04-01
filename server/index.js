const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const networkRoute = require("./routes/network");
dotenv.config();

app.use(express.json());
app.use("/api/auth/", authRoute);
app.use("/api/user/", userRoute);
app.use("/api/network/", networkRoute);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database connection failed.Server not started.");
    console.log(error);
  });
