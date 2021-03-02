const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require("fs"); 

const product = require('../products.json');

router.use(bodyParser.urlencoded({ extended: true, limit: '100mb', parameterLimit: 1000000 }));
 
router.get('/productlist', (req, res, next) => {
    res.status(200).json(product); 
});

router.post('/addProduct', (req, res, next) => {

    const productId =req.body.productId;
    const productName =req.body.productName;
    const productCode =req.body.productCode;
    const orderDate =req.body.orderDate;
    const description =req.body.description;
    const price =req.body.price;
    const starRating =req.body.starRating;
    const imageUrl =req.body.imageUrl;

    let new_product =     {
        "productId": productId,
        "productName": productName,
        "productCode": productCode,
        "orderDate": orderDate,
        "description": description,
        "price": price,
        "starRating": starRating,
        "imageUrl":imageUrl
      }

   product.push(new_product);
   fs.writeFile("products.json", JSON.stringify(product), err => { 

   if(err)
   res.status(200).json({ msg: 'FAILED' });
   else
   res.status(200).json({ msg: 'SUCCESS' });
   });
       
});


module.exports = router;