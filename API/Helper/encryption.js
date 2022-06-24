const crypto = require("crypto");
const { hash_secret } = require("../config.json");

const hash = (str, hashSecret = hash_secret) => {
  if (typeof str === "string" && str.trim() !== "") {
    const hmac = crypto.createHmac("sha256", hashSecret);
    hmac.update(str);

    return hmac.digest("hex");
  } else {
    return null;
  }
};

module.exports = {
  hash,
};
