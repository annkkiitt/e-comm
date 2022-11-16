const express = require('express');
const {
  getAllProducts,
  createProducts,
  updateProduct,
  deleteProduct,
  getProduct,
} = require('../controller/productController');
const router = express.Router();

router.route('/products').get(getAllProducts);
router.route('/product/new').post(createProducts);
router.route('/product/:id').put(updateProduct);
router.route('/product/:id').delete(deleteProduct).get(getProduct);

module.exports = router;
