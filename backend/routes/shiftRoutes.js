const express = require("express");
const router = express.Router();

const { createShift, getShifts } = require("../controllers/shiftController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createShift);
router.get("/", authMiddleware, getShifts);

module.exports = router;
