const router = require('express').Router();
const productionUserController = require('../Controllers/prodUser.controller');

// signup
router.post("/signup", productionUserController.signup);

// login
router.post("/login", productionUserController.login);

// delete
router.delete("/delete/:username", productionUserController.deleteProductionUser);

module.exports = router;


