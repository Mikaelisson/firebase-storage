const { MongoClient } = require("mongodb");

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
  const collection = db.collection("images");

  const doc = {
    name: req.file.firebaseFileName,
    url: req.file.firebaseUrl,
  };

  try {
    await collection.insertOne(doc);

    console.log("Add documents to MongoDB database success...");
    next();
  } catch (error) {
    console.log(error);
    next();
  }
};

module.exports = { addDocument };
