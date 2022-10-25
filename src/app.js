const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const routes = require("./routes/route");
const { cors } = require("./middlewares/cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors);

app.use("/", routes);

module.exports = app;
