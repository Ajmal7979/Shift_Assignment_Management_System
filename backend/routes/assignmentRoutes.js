const express = require("express");
const router = express.Router();

const {
  assignShift,
  getMyShifts,
} = require("../controllers/assignmentController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, assignShift);
router.get("/my", authMiddleware, getMyShifts);

module.exports = router;
