const router = require('express').Router();
const empDetController = require('../Controllers/empDetail.controller');

router.get("/test", empDetController.testFunc);

module.exports = router;