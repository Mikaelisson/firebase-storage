const express = require("express");
const router = express.Router();

const db = require("../controllers/db");

const multer = require("multer");
const multerConfig = require("../controllers/multerConfig.js");
const firebaseStorage = require("../firebase/firebaseConfig.js");

const controller = require("../controllers/controller");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

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
