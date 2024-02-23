const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Uploads') // assuming Uploads folder is in the root directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) 
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5 MB file size limit
  },
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only images and videos are allowed!'));
    }
  }
});

module.exports = upload;
