const Router = require("express").Router;
const {
  createControllerActionMiddleware,
} = require("../Middleware/createControllerActionMiddleware");
const { login } = require("../Controller/authController");

const router = Router();
const basePath = "/auth";

router.post("/login", createControllerActionMiddleware(login));

module.exports = {
  basePath,
  router,
};
