require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const router = require("./routes/router");

app.use(express.static(path.join(__dirname, "front/build")));

const corsOptions = {
  origin: "https://firebase-storage-test.onrender.com",
  optionsSuccessStatus: 200,
};

if (process.env.NODE_ENV != "development") {
  app.options("*", cors());

  app.use(express.static(path.join(__dirname, "front/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "front/build/index.html"), (error) => {
      if (error) return res.status(500).send(error);
    });
  });
}

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
