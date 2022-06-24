const Router = require("express").Router;
const {
  validateToken,
  validateRole,
  validateSession,
} = require("../Middleware/authMiddleware");
const {
  createControllerActionMiddleware,
} = require("../Middleware/createControllerActionMiddleware");
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../Controller/productController");

const { sys_roles } = require("../config.json");

const router = Router();
const basePath = "/products";

router.use("*", validateToken, validateSession);

router.get("/", createControllerActionMiddleware(getProducts));
router.post(
  "/",
  validateRole([sys_roles.ADMIN, sys_roles.SELLER]),
  createControllerActionMiddleware(createProduct)
);
router.put(
  "/",
  validateRole([sys_roles.ADMIN, sys_roles.SELLER]),
  createControllerActionMiddleware(updateProduct)
);
router.delete(
  "/",
  validateRole([sys_roles.ADMIN, sys_roles.SUPPORTER]),
  createControllerActionMiddleware(deleteProduct)
);

module.exports = {
  basePath,
  router,
};
