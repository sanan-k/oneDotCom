const { verifyJWT } = require("../Service/authService");
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
        res.status(401).send(err);
        return;
      }

      res.locals.auth = {
        ...jwtPayload,
      };
      next();
    });
  } else {
    res.status(401).send("Authrization token missing");
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
      res.status(401).send("Unauthorize access");
    } else {
      res.status(500).send("Authorization token not validated");
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
          if (
            permissions.some(
              (permission) => !userPermissions.includes(permission)
            )
          ) {
            res.status(401).send("Unauthorize access");
            return;
          }
        } else if (
          // check user has any permission
          !permissions.some((permission) =>
            userPermissions.includes(permission)
          )
        ) {
          res.status(401).send("Unauthorize access");
          return;
        }

        next();
      }
    } else {
      res.status(500).send("Authorization token not validated");
    }
  };

module.exports = {
  validateToken,
  validateRole,
  validatePermission,
};
