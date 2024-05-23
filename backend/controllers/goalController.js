const asynHandler = require("express-async-handler");
// @desc  Get goals
// @route GET /api/goals
// @access Private
const getGoals = asynHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

// @desc  Set goals
// @route POST /api/goals
// @access Private
const setGoals = asynHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set Goals" });
});

// @desc  Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoals = asynHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
});

// @desc  Delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoals = asynHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
