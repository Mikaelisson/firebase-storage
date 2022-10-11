const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

module.exports = multerConfig = {
  // dest: path.resolve(__dirname, "..", "temp", "uploads"),
  storage: multer.memoryStorage(),
  // diskStorage({
  //   destination: (req, file, cb) => {
  //     cb(null, path.resolve(__dirname, "..", "temp", "uploads"));
  //   },
  //   filename: (req, file, cb) => {
  //     crypto.randomBytes(16, (error, hexa) => {
  //       if (error) cb(error);

  //       const fileName = `${hexa.toString("hex")}-${file.originalname}`;

  //       cb(null, fileName);
  //     });
  //   },
  // }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpg",
      "image/pjpeg",
      "image/jpeg",
      "image/png",
      "image/gif",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
};
