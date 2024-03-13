const router = require("express").Router();
const completedController = require("../Controllers/completed.controller");
const { upload } = require("../Middlewares/multer.middlewares");

router.post("/submit", upload.single("attachments"), completedController.submit);

router.get("/get", completedController.getCompleted);

router.get("/search/:id", completedController.searchCompleted);

module.exports = router;
