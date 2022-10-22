const express = require("express");
const router = express.Router();

const cors = require("cors");

const db = require("../controllers/db");

const multer = require("multer");
const multerConfig = require("../controllers/multerConfig.js");
const firebaseStorage = require("../firebase/firebaseConfig.js");

const controller = require("../controllers/controller");

const corsOptions = {
  origin: "https://firebase-storage-test.onrender.com",
  optionsSuccessStatus: 200,
};

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(cors(corsOptions));

router.get("/", controller.home);
router.get("/api/images", db.findDocuments, controller.findImage);

router.post(
  "/upload",
  multer(multerConfig).single("img-file"),
  firebaseStorage.uploadImage,
  db.addDocument,
  controller.uploadImage
);

router.delete(
  "/:id",
  db.deleteDocument,
  firebaseStorage.deleteImage,
  controller.deleteImage
);

module.exports = router;
