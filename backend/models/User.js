const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  staffId: {
    type: String,
    unique: true,
    sparse: true   // only for STAFF
  },
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["STAFF", "MANAGER"]
  }
});

module.exports = mongoose.model("User", userSchema);
