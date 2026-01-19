const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  staff: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  shift: { type: mongoose.Schema.Types.ObjectId, ref: "Shift" }
});

module.exports = mongoose.model("Assignment", assignmentSchema);
