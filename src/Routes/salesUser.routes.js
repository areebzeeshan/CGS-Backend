const router = require('express').Router();
const salesUserController = require('../Controllers/salesUser.controller');


// signup
router.post("/signup", salesUserController.signup);

// login
router.post("/login", salesUserController.login);

// delete
router.delete("/delete/:username", salesUserController.deleteSalesUser);

module.exports = router;


