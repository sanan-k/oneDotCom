const jwt = require("jsonwebtoken");

/**
 *
 * @param {number} userId
 */
const generateJWT = async (userId) => {};

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
