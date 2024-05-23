const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @desc  Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @desc  Set goals
// @route POST /api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
  //
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// @desc  Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  // res.status(200).json(updateGoals);
  res
    .status(200)
    .json({ message: `Updated Goal ${req.params.id}`, updatedGoal });
});

// @desc  Delete goals
// @route DELETE /api/goals/:id
// @access Private

const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404); // Not found
    throw new Error("Goal not found");
  }

  await Goal.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: `Deleted Goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
