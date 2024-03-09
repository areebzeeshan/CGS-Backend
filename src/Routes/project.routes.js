const router = require("express").Router();
const projectController = require("../Controllers/projects.controller");
const { upload } = require("../Middlewares/multer.middlewares");

// posting project with file upload
router.post("/submit", upload.single("attachments"), projectController.submit);

// fetching project
router.get("/get", projectController.getProjects);

// searching project by id
router.get("/search/:id", projectController.searchProject);

module.exports = router;
