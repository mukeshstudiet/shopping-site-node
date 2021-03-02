const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require("fs"); 
router.use(cors());

const order = require('../orders.json');
router.use(bodyParser.urlencoded({ extended: true, limit: '100mb', parameterLimit: 1000000 }));

router.get('/orderlist', (req, res, next) => {
    res.status(200).json(order);
});

router.post('/saveProduct', (req, res, next) => {

    const orderId =req.body.orderId;
    const releaseDate =req.body.releaseDate;
    const orderCost =req.body.orderCost;

    console.log(JSON.stringify(order));

    let new_order =            {
        "orderId": orderId,
        "releaseDate": releaseDate,
        "orderCost": orderCost
      }

    order.push(new_order);
   fs.writeFile("orders.json", JSON.stringify(order), err => { 
     
   console.log("Order + order.orderId + saved successfully");
   if(err)
   res.status(200).json({ msg: 'FAILED' });
   else
   res.status(200).json({ msg: 'SUCCESS' });
   });
    
   
});


module.exports = router;
