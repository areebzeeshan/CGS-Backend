const router = require('express').Router();
const dropdownController = require('../Controllers/dropdowns.controller');

// posting project natures
router.post("/projectNature", dropdownController.addProjectNature);

// posting platform
router.post("/platform", dropdownController.addPLatform);

// posting department
router.post("/department", dropdownController.addDepartment);

// posting shift
router.post("/shift", dropdownController.addShift);

// posting designation
router.post("/designation", dropdownController.addDesignation);

// posting bank
router.post("/bank", dropdownController.addBank);

// fetching project nature
router.get("/getProjectNature", dropdownController.getProjectNature);

// fetching platform
router.get("/getPlatform", dropdownController.getPlatform);

// fetching department
router.get("/getDepartment", dropdownController.getDepartment);

// fetching shift
router.get("/getShift", dropdownController.getShift);

// fetching designation
router.get("/getDesignation", dropdownController.getDesignation);

// fetching bank
router.get("/getBank", dropdownController.getBank);

module.exports = router;