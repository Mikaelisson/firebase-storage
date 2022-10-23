require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes/router");

app.use("/", router);

app.use(express.static(path.join(__dirname, "front/build")));

if (process.env.NODE_ENV != "development") {
  app.use(express.static(path.join(__dirname, "front/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "front/build/index.html"), (error) => {
      if (error) return res.status(500).send(error);
    });
  });
}

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
