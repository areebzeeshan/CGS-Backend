const router = require("express").Router();
const reviewController = require("../Controllers/review.controller");
const { upload } = require("../Middlewares/multer.middlewares");

router.post("/submit", upload.single("attachments"), reviewController.submit);

router.get("/get", reviewController.getReview);

router.get("/search/:id", reviewController.searchReview);

module.exports = router;
