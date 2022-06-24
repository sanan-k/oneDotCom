const Router = require("express").Router;
const { validateToken, validateRole } = require("../Middleware/authMiddleware");
const {
  createControllerActionMiddleware,
} = require("../Middleware/createControllerActionMiddleware");
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../Controller/productController");

const { api_roles } = require("../config.json");

const router = Router();
const basePath = "/products";

router.use("*", validateToken);

router.get("/", createControllerActionMiddleware(getProducts));
router.post(
  "/",
  validateRole([api_roles.ADMIN, api_roles.SELLER]),
  createControllerActionMiddleware(createProduct)
);
router.put(
  "/",
  validateRole([api_roles.ADMIN, api_roles.SELLER]),
  createControllerActionMiddleware(updateProduct)
);
router.delete(
  "/",
  validateRole([api_roles.ADMIN, api_roles.SUPPORTER]),
  createControllerActionMiddleware(deleteProduct)
);

module.exports = {
  basePath,
  router,
};
