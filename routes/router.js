const express = require("express");
const router = express.Router();

const db = require("../controllers/db");

const multer = require("multer");
const multerConfig = require("../controllers/multerConfig.js");
const { uploadImage, deleteImage } = require("../firebase/firebaseConfig.js");

const controller = require("../controllers/controller");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/", controller.home);
router.get("/api/images", db.findDocuments, controller.findImage);

router.post(
  "/upload",
  multer(multerConfig).single("img-file"),
  uploadImage,
  db.addDocument,
  controller.uploadImage
);

router.delete("/:id", db.deleteDocument, deleteImage, controller.deleteImage);

module.exports = router;
