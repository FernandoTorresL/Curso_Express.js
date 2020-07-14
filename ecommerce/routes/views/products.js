const express = require("express");
const router = express.Router();
const ProductsService = require('../../services/products');

const ProductService = new ProductsService();

router.get("/", async function(req, res, next) {
  const { tags } = req.query;

  try {
    myUndefinedFunction();
    throw new Error('This is an error');
    const products = await ProductService.getProducts({ tags });
    res.render("products", { products });
  }
  catch(err) {
    next(err);
  }
});

module.exports = router;