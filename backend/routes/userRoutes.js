// backend/routes/userRoutes.js
const express = require("express");
const router = express.Router();

const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

// Get all STAFF users (for Manager dropdown)
router.get("/staff", authMiddleware, async (req, res) => {
  try {
    const staff = await User.find({ role: "STAFF" }).select("name email");
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch staff" });
  }
});

module.exports = router;
