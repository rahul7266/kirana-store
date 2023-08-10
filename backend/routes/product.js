const express = require('express') ;
const router = express.Router() ;
const productController = require('../controllers/product') ;

router.post('/addproduct',productController.createProduct) ;


module.exports = router ;