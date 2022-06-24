const Router = require("express").Router;
const {
  createControllerActionMiddleware,
} = require("../Middleware/createControllerActionMiddleware");
const { createUser } = require("../Controller/userController");

const router = Router();
const basePath = "/user";

router.post("/register", createControllerActionMiddleware(createUser));

module.exports = {
  basePath,
  router,
};
