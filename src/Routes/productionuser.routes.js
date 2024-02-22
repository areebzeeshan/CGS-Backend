const router = require('express').Router();
const productionUserController = require('../Controllers/prodUser.controller');

// signup
router.post("/signup", productionUserController.signup);

// login
router.post("/login", productionUserController.login);

module.exports = router;


