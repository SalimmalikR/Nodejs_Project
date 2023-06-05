const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'files/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileUpload = multer({ storage });

module.exports = fileUpload;