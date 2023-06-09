const router = require("express").Router();
const userControllers = require("../../controllers/user-controller");
const { authMiddleware } = require("../../utils/auth");

// Import any controllers needed here
const { getUser, createUser, updateUser, authUser } = userControllers;

// Declare the routes that point to the controllers above
router.route("/").post(createUser);

router.route("/me").get(authMiddleware, getUser);

router.route("/login").post(authUser);

router.route("/:id").put(updateUser);

module.exports = router;
