const router = require("express").Router();
const allotedController = require("../Controllers/alloted.controller");
const { upload } = require("../Middlewares/multer.middlewares");

router.post("/submit", upload.single("attachments"), allotedController.submit)

router.get("/get", allotedController.getAlloted)

router.get("/search/:id", allotedController.searchAlloted)

module.exports = router;
