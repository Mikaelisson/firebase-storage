const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const dbName = "database-images";
const db = client.db(dbName);

const conectToDB = async () => {
  await client.connect();
  console.log("Connected successfully to server");
};

conectToDB();

const addDocument = async (req, res, next) => {
  if (!req.file) return next();

  const collection = db.collection("images");

  const doc = {
    name: req.file.firebaseFileName,
    url: req.file.firebaseUrl,
  };

  try {
    await collection.insertOne(doc);

    next();
  } catch (error) {
    console.log(error);
    next();
  }
};

const findDocuments = async (req, res, next) => {
  const collection = db.collection("images");

  try {
    const result = await collection.find({}).toArray();
    req.doc = result;
    next();
  } catch (error) {
    console.log(error);
    next();
  }
};

const deleteDocument = async (req, res, next) => {
  const collection = db.collection("images");
  const id = ObjectId(req.params.id);

  try {
    const find = await collection.findOne({ _id: id });
    req.file = find.name;
    await collection.deleteOne({ _id: id });
    next();
  } catch (error) {
    console.log(error);
    next();
  }
};

module.exports = { addDocument, findDocuments, deleteDocument };
