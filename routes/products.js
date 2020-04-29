const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');



//All Routes

router.post('/create',productController.createProduct);
router.get('/',productController.getProducts);
router.delete('/:id',productController.deleteProduct);
router.post('/:id/update_quantity',productController.editProductQuantity);


module.exports = router;
