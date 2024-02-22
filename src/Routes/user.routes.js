const router = require("express").Router();
const userController = require("../Controllers/user.controller");

// signup
router.post("/signup",userController.signup);

// login
router.post("/login",userController.login);



module.exports = router;