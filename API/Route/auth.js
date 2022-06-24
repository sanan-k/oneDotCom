const Router = require("express").Router;
const {
  validateToken,
  validateSession,
} = require("../Middleware/authMiddleware");
const {
  createControllerActionMiddleware,
} = require("../Middleware/createControllerActionMiddleware");
const { login, logout } = require("../Controller/authController");

const router = Router();
const basePath = "/auth";

router.post("/login", createControllerActionMiddleware(login));
router.post(
  "/logout",
  validateToken,
  validateSession,
  createControllerActionMiddleware(logout)
);

module.exports = {
  basePath,
  router,
};
