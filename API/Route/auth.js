const Router = require("express").Router;
const { validateToken } = require("../Middleware/authMiddleware");
const {
  createControllerActionMiddleware,
} = require("../Middleware/createControllerActionMiddleware");
const { login, logout } = require("../Controller/authController");

const router = Router();
const basePath = "/auth";

router.post("/login", createControllerActionMiddleware(login));
router.post("/logout", validateToken, createControllerActionMiddleware(logout));

module.exports = {
  basePath,
  router,
};
