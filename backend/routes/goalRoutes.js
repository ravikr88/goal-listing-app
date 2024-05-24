const express = require("express"); // common js syntax
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

const protect = require("../middleware/authMiddleware");
// chain "/" route
router.route("/").get(protect, getGoals).post(protect, setGoals);
// router.get("/", getGoals);
// router.post("/", setGoals);

// chaining routes
router.route("/:id").put(protect, updateGoals).delete(protect, deleteGoals);
// router.put("/:id", updateGoals);
// router.delete("/:id", deleteGoals);

module.exports = router;
