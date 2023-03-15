const router = require("express").Router();
const analyticControllers = require("../../controllers/analytic-controller");

//bring in controllers

const {
  createMonthly,
  gettAllMonthly,
  getMonthlyById,
  updateMonthly,
} = analyticControllers;

//routes for controllers

router.route("/").post(createMonthly);
router.route("/").get(gettAllMonthly);

router.route("/:id").get(getMonthlyById);
router.route("/:id").put(updateMonthly);

module.exports = router;

