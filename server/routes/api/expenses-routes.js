const router = require("express").Router();
const expensesController = require("../../controllers/expenses-controller");

// Import any controllers needed here
const {
  getAllExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense,
} = expensesController;

// Declare the routes that point to the controllers above
router.route("/").get(getAllExpenses);
router.route("/").post(createExpense);

router.route("/:id").get(getExpenseById);
router.route("/:id").put(updateExpense);
router.route("/:id").delete(deleteExpense);

module.exports = router;
