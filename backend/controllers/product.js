const Product = require('../models/product') ;

exports.createProduct = (req, res, next) => {
    const { url, name, price, category,countable } = req.body;
    if (!name || !url || !price || !category || !countable) {
     return res.status(422).json({ error: "please add all the fields" });
    }
       
          const product = new Product({
            photo:url,
            name,
            price,
            category,
            countable
          });
  
          product
            .save()
            .then((product) => {
              res.json({message:"user registered successfully",product});
            })
            .catch((err) => console.log(err));
    
  };