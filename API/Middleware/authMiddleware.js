const { verifyJWT } = require("../Service/authService");
const { checkSession } = require("../Service/Session");
const { sys_messages } = require("../config.json");

/**
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
const validateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const [keywordBearer, token] = authHeader.split(" ");

  if (keywordBearer === "Bearer") {
    verifyJWT(token, (err, jwtPayload) => {
      if (err) {
        res.status(401).send(sys_messages.error.UNAUTHORIZE_ACCESS);
        return;
      }

      res.locals.auth = {
        ...jwtPayload,
        token,
      };
      next();
    });
  } else {
    res.status(401).send(sys_messages.error.TOKEN_NOT_VALIDATED);
  }
};

/**
 *
 * @param {string[]} roles
 * @returns
 */
const validateRole =
  (roles = []) =>
  (req, res, next) => {
    const auth = res.locals.auth;
    if (auth) {
      if (roles.includes(auth.role)) {
        next();
        return;
      }
      res.status(401).send(sys_messages.error.UNAUTHORIZE_ACCESS);
    } else {
      res.status(500).send(sys_messages.error.TOKEN_NOT_VALIDATED);
    }
  };

/**
 *
 * @param {string[]} permissions
 * @param {boolean} all
 * @returns
 */
const validatePermission =
  (permissions = [], all = false) =>
  async (req, res, next) => {
    const auth = res.locals.auth;
    if (auth) {
      if (permissions.length === 0) {
        next();
      } else {
        const userPermissions = await getRolePermissions(auth.role);

        if (all) {
          // check user has all permissions
          if (permissions.some((permission) => !userPermissions[permission])) {
            res.status(401).send(sys_messages.error.UNAUTHORIZE_ACCESS);
            return;
          }
        } else if (
          // check user has any permission
          !permissions.some((permission) => userPermissions[permission])
        ) {
          res.status(401).send(sys_messages.error.UNAUTHORIZE_ACCESS);
          return;
        }

        next();
      }
    } else {
      res.status(500).send(sys_messages.error.TOKEN_NOT_VALIDATED);
    }
  };

/**
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
const validateSession = (req, res, next) => {
  const { auth } = res.locals;

  if (auth) {
    if (checkSession(auth.token)) {
      next();
    }
    res.status(400).send(sys_messages.error.SESSION_EXPIRED);
  } else {
    res.status(500).send(sys_messages.error.TOKEN_NOT_VALIDATED);
  }
};

module.exports = {
  validateToken,
  validateRole,
  validatePermission,
  validateSession,
};
