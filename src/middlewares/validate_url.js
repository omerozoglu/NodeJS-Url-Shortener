const { CustomURL } = require("../models/custom_url");

function validateURL(req, res, next) {
  if (CustomURL.validateURL(req.body.longurl)) {
    next();
  } else {
    res.status(400).json({ result: "The Url was not vaild." });
  }
}

module.exports = { validateURL };
