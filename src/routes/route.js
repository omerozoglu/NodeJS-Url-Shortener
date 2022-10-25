const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller");
const { validateURL } = require("../middlewares/validate_url");

router.get("/:shorturl", controller.redirect);
router.post("/createURL", validateURL, controller.createShortURL);

module.exports = router;
