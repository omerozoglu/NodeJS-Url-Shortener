const { Shortener } = require("../utilities/shortener");
var db = require("../utilities/db");

class CustomURL {
  constructor(alias, longURL) {
    this.alias = alias;
    this.longURL = longURL;
    this.shortURL = "";
    this.shortURLLength = process.env.SHORT_URL_LENGTH || 6;
  }

  createShortURL() {
    if (this.alias) this.shortURL = this.alias;
    else this.shortURL = Shortener.encrypt(this.shortURLLength);
    return this.shortURL;
  }

  static async addCustomURL(key, value) {
    await db.put(key, value, (err) => {
      if (err) throw err;
    });
  }
  static getCustomURL(key) {
    return new Promise((resolve, reject) => {
      db.get(key, (err, value) => {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(value));
      });
    });
  }

  static validateURL(url) {
    var regexpression =
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (regexpression.test(url)) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = { CustomURL };
