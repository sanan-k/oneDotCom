const jwt = require("jsonwebtoken");
const { token_timeout } = require("../config.json");
/**
 *
 * @param {number} userId
 */
const generateJWT = (jwtPayload) => {
  return jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY, {
    expiresIn: token_timeout,
  });
};

/**
 *
 * @param {string} token
 * @param {function} cb
 */
const verifyJWT = (token, cb) => {
  jwt.verify(token, process.env.JWT_SECRET_KEY, cb);
};

/**
 *
 * @param {string} role
 */
const getRolePermission = async (role) => {};

module.exports = {
  generateJWT,
  verifyJWT,
};
