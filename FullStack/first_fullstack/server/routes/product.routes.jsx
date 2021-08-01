const ProductsControllers = require("../controllers/product.controller");

module.exports = function(app) {
  app.get("/api/product/", ProductsControllers.findAllProducts);
  app.post("/api/product/new", ProductsControllers.createProduct);
};
