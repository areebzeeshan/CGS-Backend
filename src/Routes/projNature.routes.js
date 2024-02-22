const router = require('express').Router();
const dropdownController = require('../Controllers/dropdowns.controller');

// posting project natures
router.post("/projectNature", dropdownController.addProjectNature);

// posting platform
router.post("/platform", dropdownController.addPLatform);

// posting department
router.post("/department", dropdownController.addDepartment);

// fetching project nature
router.get("/getProjectNature", dropdownController.getProjectNature);

// fetching platform
router.get("/getPlatform", dropdownController.getPlatform);

// fetching department
router.get("/getDepartment", dropdownController.getDepartment);

module.exports = router;