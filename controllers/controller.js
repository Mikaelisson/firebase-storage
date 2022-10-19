const home = async (req, res) => {
  try {
    req.render("index");
  } catch (error) {
    res.send(error);
  }
};

const uploadImage = async (req, res) => {
  try {
    res.redirect("/");
  } catch (error) {
    res.send(error);
  }
};

const findImage = async (req, res) => {
  try {
    const doc = req.doc;
    res.send(doc);
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteImage = async (req, res) => {
  try {
    res.send("success");
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  home,
  uploadImage,
  findImage,
  deleteImage,
};
