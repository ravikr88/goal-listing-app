const express = require("express"); // common js syntax
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

// chain "/" route
router.route("/").get(getGoals).post(setGoals);
// router.get("/", getGoals);
// router.post("/", setGoals);

// chaining routes
router.route("/:id").put(updateGoals).delete(deleteGoals);
// router.put("/:id", updateGoals);
// router.delete("/:id", deleteGoals);

module.exports = router;
