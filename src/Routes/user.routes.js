const router = require("express").Router();
const userController = require("../Controllers/user.controller");

// signup
router.post("/signup",userController.signup);

// login
router.post("/login",userController.login);

// delete
router.delete("/delete/:username",userController.deleteUser);

module.exports = router;