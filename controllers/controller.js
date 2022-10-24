const home = async (req, res) => {
  try {
    res.redirect("/api/images");
  } catch (error) {
    res.status(404).send(error);
  }
};

const uploadImage = async (req, res) => {
  console.log(req.file);
  if (!req.file) throw new Error("Arquivo inválido.");
  try {
    res.redirect("/");
  } catch (error) {
    res.status(404).send(error);
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
