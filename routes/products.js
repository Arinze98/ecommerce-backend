const express = require('express');
const { getProducts, createProduct, getProductById } = require('../controllers/productController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', getProducts);
router.post('/', auth, createProduct);
router.get('/:id', getProductById);

module.exports = router;
