const Router = require("express").Router;

const { basePath: authBasePath, router: authRouter } = require("./auth");
const { basePath: userBasePath, router: userRouter } = require("./user");
const {
  basePath: productBasePath,
  router: productRouter,
} = require("./product");

const router = Router();

router.use(authBasePath, authRouter);
router.use(userBasePath, userRouter);
router.use(productBasePath, productRouter);

module.exports = { router };
