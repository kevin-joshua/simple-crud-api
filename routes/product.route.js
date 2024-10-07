const express = require('express')
const Product = require('../models/product.model'); 
const router = express.Router()
const {getProducts,getProduct,createProduct,updateProduct, deleteProduct} = require('../controllers/product.controller')


//get
router.get('/', getProducts)
router.get('/:id',getProduct)
//create
router.post('/',createProduct)
//update
router.put('/:id',updateProduct)
//delete
router.delete('/:id',deleteProduct)

module.exports = router;
