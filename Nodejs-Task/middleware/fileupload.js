const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'files/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // Check if the file is a JPG image
  if (file.mimetype === 'image/jpeg' && file.originalname.toLowerCase().endsWith('.jpg')) {
    cb(null, true);
  } else {
    // Reject the file (not a JPG image)
    cb(new Error('Only JPG image files are allowed'));
  }
};

const upload = multer({ storage, fileFilter });

module.exports = (req, res, next) => {
  upload.single('image')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: err.message });
    } else if (err) {
      return res.status(500).json({ error: err.message });
    }
    next();
  });
};
