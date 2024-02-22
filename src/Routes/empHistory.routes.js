const router = require('express').Router();
const empDetController = require('../Controllers/empDetail.controller');

// posting route of employee history
router.post('/employeeHistory', empDetController.employeeHistory);

// fetching route of employee history
router.get("/fetchingEmployeeHistory", empDetController.fetchingEmployeeHistory);

module.exports = router;