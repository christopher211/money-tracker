const router = require("express").Router();
const sampleRoutes = require("./sample-routes");
const userRoutes = require("./user-routes");
const transactionRoutes = require("./transaction-routes");
const monthlyRoutes = require("./monthly-routes");

router.use("/sample", sampleRoutes);
router.use("/users", userRoutes);
router.use("/transactions", transactionRoutes);
router.use("/monthly-transactions", monthlyRoutes);

module.exports = router;
