const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById,postNewProduct, getLastProduct,deleteById ,updateById} = require('../controller/productControllers');



//@desc GET all product from db
//@route GET /api/products
//@access Public
router.get('/api/products', getAllProducts);


//@desc GET a product by id from db
//@route GET /api/products/:id
//@access Public
router.get('/:id', getProductById);
router.get('/getLastProduct', getLastProduct);
router.post('/postNewProduct', postNewProduct);
router.get('/deteleById/:id', deleteById);
router.post('/updateById', updateById);


module.exports = router;