const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getAllStaff
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post("/register", register);
router.post("/login", login);

/* 👇 NEW ROUTE (MANAGER ONLY) */
router.get(
  "/staff",
  authMiddleware,
  roleMiddleware("MANAGER"),
  getAllStaff
);

module.exports = router;
