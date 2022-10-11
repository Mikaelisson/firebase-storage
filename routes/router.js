const express = require("express");
const router = express.Router();

const multer = require("multer");
const multerConfig = require("../controllers/multerConfig.js");
const uploadImage = require("../firebase/firebaseConfig.js");

const controller = require("../controllers/controller");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/", (req, res) => controller.home);

router.post(
  "/upload",
  multer(multerConfig).single("img-file"),
  uploadImage,
  controller.upload
);

module.exports = router;
