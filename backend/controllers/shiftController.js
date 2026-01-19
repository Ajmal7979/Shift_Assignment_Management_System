const Shift = require("../models/Shift");

// CREATE SHIFT (Manager)
const createShift = async (req, res) => {
  try {
    const { startTime, endTime } = req.body;

    const shift = await Shift.create({
      startTime,
      endTime,
    });

    res.status(201).json(shift);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL SHIFTS (Manager)
const getShifts = async (req, res) => {
  try {
    const shifts = await Shift.find().sort({ startTime: 1 });
    res.json(shifts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createShift,
  getShifts,
};
