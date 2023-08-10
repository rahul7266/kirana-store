const mongoose = require('mongoose') ;

const productSchema = new mongoose.Schema({
    photo:{
        type:String,
        required:true 
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    countable:{
        type:String,
        required:true
    }
}) ;

module.exports = mongoose.model("Product",productSchema) ;
