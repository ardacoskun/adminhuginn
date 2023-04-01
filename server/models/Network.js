const mongoose = require("mongoose");

const NetworkSchema = new mongoose.Schema(
  {
    networkName: { type: String, required: true },
    enviroment: { type: String, required: true },
    apr: { type: Number, default: 0 },
    status: { type: Number, required: true },
    description: { type: String },
    imageUrl: { type: String },
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Network", NetworkSchema);
