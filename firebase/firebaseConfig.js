var admin = require("firebase-admin");

const BUCKET = "image-processing-1b28b.appspot.com";

var serviceAccount = require("./firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

const uploadImage = (req, res, next) => {
  if (!req.file) return next();

  const image = req.file;

  const fileName = Date.now() + "." + image.originalname;

  const file = bucket.file(`images/${fileName}`);

  const stream = file.createWriteStream({
    metadata: {
      contentType: image.mimetype,
    },
  });

  stream.on("error", (error) => {
    console.log(error);
  });

  stream.on("finish", async () => {
    await file.makePublic();

    req.file.firebaseFileName = fileName;

    req.file.firebaseUrl = `http://storage.googleapis.com/${BUCKET}/images/${fileName}`;

    next();
  });

  stream.end(image.buffer);
};

const deleteImage = async (req, res, next) => {
  const file = bucket.file(`images/${req.file}`);

  try {
    await file.delete();
    next();
  } catch (error) {
    console.log(error);
    next();
  }
};

module.exports = { uploadImage, deleteImage };
