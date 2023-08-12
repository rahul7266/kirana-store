const express = require('express') ;
const router = express.Router() ;
const productController = require('../controllers/product') ;
const isLogin = require('../middleware/isLogin') ;

router.post('/addproduct',isLogin,productController.createProduct) ;


module.exports = router ;