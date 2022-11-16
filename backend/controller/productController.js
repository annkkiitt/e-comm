const Product = require('../model/productModel');

//Create products: ADMIN
exports.createProducts = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, product });
  } catch (err) {
    console.log(err.message);
  }
};

//Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (err) {
    console.log(err.message);
  }
};

//Get product detail
exports.getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: 'Product not found' });
  }

  res.status(200).json({ success: true, product });
};

//Update product
exports.updateProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: 'Product not found' });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body);
  res
    .status(200)
    .json({ success: true, message: 'Product updated successfully' });
};

//Delete product
exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: 'Product not found' });
  }

  await Product.findByIdAndDelete(req.params.id);
  res
    .status(200)
    .json({ success: true, message: 'Product deleted successfully' });
};
