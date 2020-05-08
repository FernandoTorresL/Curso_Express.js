const express = require("express");
const router = express.Router();
const ProductsService = require('../../services/products');

const ProductService = new ProductsService();

router.get('/', async function(req, res, next){
  const { tags } = req.query;
  try {
    const products = await ProductService.getProducts({ tags });

    res.status(200).json({
      data: products,
      message: 'products listed'
    });
  } catch(err) {
    next(err)
  }
});

router.get('/:productId', async function(req, res){
  const { productId } = req.params;
  try {
    const product = await ProductService.getProduct({ productId });

    res.status(200).json({
      data: product,
      message: 'product retrieved'
    });
  } catch(err) {
    next(err)
  }
});

router.post('/', function(req, res){
  const { body: product } = req;
  try {
    const createdProduct = ProductService.createProduct({ product });

    res.status(201).json({
      data: createdProduct,
      message: 'products created'
    });
  } catch(err) {
    next(err)
  }
});

router.put('/:productId', function(req, res){
  const { productId } = req.params;
  try {
    const { body: product } = req;
    const updatedProduct = ProductService.updateProduct({ productId, product });

    res.status(200).json({
      data: updatedProduct,
      message: 'product updated'
    });
  } catch(err) {
    next(err)
  }
});

router.delete('/:productId', function(req, res){
  const { productId } = req.params;
  try {
    const deletedProduct = ProductService.deleteProduct({ productId });

    res.status(200).json({
      data: deletedProduct,
      message: 'product deleted'
    });
  } catch(err) {
    next(err)
  }
});

module.exports = router;
