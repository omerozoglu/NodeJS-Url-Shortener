const { CustomURL } = require("../models/custom_url");

module.exports.createShortURL = (req, res, next) => {
  try {
    const curl = new CustomURL(req.body.alias, req.body.longurl);
    const BASE_URL = req.protocol + "://" + req.headers.host;
    const shorturl = curl.createShortURL();
    CustomURL.addCustomURL(shorturl, JSON.stringify(curl));
    res.status(201).json({
      result: BASE_URL + "/" + shorturl,
    });
  } catch (error) {
    res.status(400).json({ result: error });
  }
};

module.exports.redirect = async (req, res, next) => {
  try {
    const param = req.params.shorturl;
    //Get long url from
    const curl = await CustomURL.getCustomURL(param);
    res.redirect(curl.longURL);
  } catch (error) {
    res.status(400).json({ result: error });
  }
};
