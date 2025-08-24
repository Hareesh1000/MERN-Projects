const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router.post("/", userController.createUser);
// router.get("/signin-user", userController.getUserById);

router.post("/signin-user", userController.authenticateUser);
router.post("/signup", userController.createUser);

module.exports = router;
