const router = require('express').Router();
const salesUserController = require('../Controllers/salesUser.controller');


// signup
router.post("/signup", salesUserController.signup);

// login
router.post("/login", salesUserController.login);

module.exports = router;


