const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');



//All Routes

router.post('/products/create',productController.createProduct);
router.get('/products',productController.getProducts);
router.delete('/products/:id',productController.deleteProduct);
router.post('/products/:id/update_quantity',productController.editProductQuantity);


module.exports = router;
