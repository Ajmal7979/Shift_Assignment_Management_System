const mongoose = require("mongoose");

const shiftSchema = new mongoose.Schema({
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true }
});

module.exports = mongoose.model("Shift", shiftSchema);
