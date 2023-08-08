const express = require('express') ;
const router = express.Router() ;
const authController = require('../controllers/auth') ;

router.post('/signup',authController.signUp) ;
router.post('/signin',authController.signIn) ;

module.exports = router ;