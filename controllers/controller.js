const home = async (req, res) => {
  try {
    req.render("index");
  } catch (error) {
    res.send(error);
  }
};

const upload = async (req, res) => {
  try {
    console.log("REDIRECT...");
    res.redirect("/");
  } catch (error) {
    res.send(error);
  }
};

const find = async (req, res) => {
  try {
    const doc = req.doc;
    console.log("CONTROLLER REQUEST ===>", doc);
    res.send(doc);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  home,
  upload,
  find,
};
