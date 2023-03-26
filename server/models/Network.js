const mongoose = require("mongoose");

const NetworkSchema = new mongoose.Schema({
  networkName: { type: String, required: true },
  enviroment: { type: String, required: true },
  apr: { type: Number, default: 0 },
  status: { type: Number, required: true },
  description: { type: String },
  userId: { type: String, required: true },
});

module.exports = mongoose.model("Network", NetworkSchema);
