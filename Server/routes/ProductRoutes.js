const express = require('express')
const {requireSignIn,isAdmin} = require("../middlewares/authMiddleware");
const { createProductController, getProductController, getSingleProductController, productPhotoController, deleteController, updateProductController } = require('../controllers/productContrller');
const formidable = require('express-formidable')


const router = express.Router();


// create category
router.post('/create-product',requireSignIn, isAdmin, formidable(),createProductController)

//get products

router.get('/get-product',getProductController)

// get single product

router.get('/get-product/:slug', getSingleProductController)

//get photo
router.get('/product-photo/:pid',productPhotoController)

//product delete
router.delete('/product-delete/:pid',deleteController)
// product update
router.put('/update-product/:pid',requireSignIn, isAdmin, formidable(),updateProductController)

module.exports = router
