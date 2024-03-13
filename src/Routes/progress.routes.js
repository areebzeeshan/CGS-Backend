const router = require('express').Router();
const progressController = require('../Controllers/progress.controller');
const {upload} = require('../Middlewares/multer.middlewares')

router.post('/submit', upload.single("attachments"), progressController.submit);

router.get('/get', progressController.getProgress);

router.get('/search/:id', progressController.searchProgress);

module.exports = router;