const Router = require("express").Router;
const {
  createControllerActionMiddleware,
} = require("../Middleware/createControllerActionMiddleware");
const { login, logout } = require("../Controller/authController");

const router = Router();
const basePath = "/auth";

router.post("/login", createControllerActionMiddleware(login));
router.post("/logout", createControllerActionMiddleware(logout));

module.exports = {
  basePath,
  router,
};
