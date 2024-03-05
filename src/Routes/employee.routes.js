const router = require('express').Router();
const empDetController = require('../Controllers/empDetail.controller');

// posting formdata
router.post('/submit', empDetController.submit);

// fetching formData
router.get('/fetch', empDetController.fetchingFormData)

// search with id and fetching history in my db
router.get("/search/:id", empDetController.getEmployeeData);

// add records
router.post("/addRecord/:id", empDetController.addRecord);

// update data
router.put("/update/:id", empDetController.updateEmployee);

// delete data
router.delete("/delete/:id", empDetController.deleteEmployee);

module.exports = router;