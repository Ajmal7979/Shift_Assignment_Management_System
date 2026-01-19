const Assignment = require("../models/Assignment");

// Assign shift to staff
const assignShift = async (req, res) => {
  try {
    const { staffId, shiftId } = req.body;

    const assignment = await Assignment.create({
      staff: staffId,
      shift: shiftId,
    });

    res.status(201).json(assignment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get shifts for logged-in staff
const getMyShifts = async (req, res) => {
  try {
    const assignments = await Assignment.find({ staff: req.user.id })
      .populate("shift");

    res.json(assignments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  assignShift,
  getMyShifts,
};
