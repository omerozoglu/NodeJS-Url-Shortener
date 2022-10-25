var levelup = require("levelup");
var leveldown = require("leveldown");
const encode = require("encoding-down");
const path = require("path");

const dbPath = process.env.DB_PATH || path.join(__dirname, "curldb");

const db = levelup(encode(leveldown(dbPath), { valueEncoding: "json" }));

module.exports = db;
