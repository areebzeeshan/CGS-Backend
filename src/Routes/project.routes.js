const router = require('express').Router();
const projectController = require('../Controllers/projects.controller');

// posting project
router.post("/submit", projectController.submit);

// fetching project
router.get("/get", projectController.getProjects);

module.exports = router;