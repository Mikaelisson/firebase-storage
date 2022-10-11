const home = async (req, res) => {
  try {
    req.render("index");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const upload = async (req, res) => {
  try {
    console.log(req.file);
    res.send("Success");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = {
  home,
  upload,
};
