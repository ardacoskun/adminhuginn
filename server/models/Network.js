const mongoose = require("mongoose");

const NetworkSchema = new mongoose.Schema(
  {
    networkName: { type: String, required: true },
    enviroment: { type: Number, required: true },
    apr: { type: Number, default: 0 },
    status: { type: Number, required: true },
    description: { type: String },
    imageUrl: { type: String },
    stakeUrl: { type: String },
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Network", NetworkSchema);
