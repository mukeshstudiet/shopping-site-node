const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require("fs"); 
router.use(cors());

const cart = require('../cart.json');
// parse application/x-www-form-urlencoded````
router.use(bodyParser.urlencoded({ extended: true, limit: '100mb', parameterLimit: 1000000 }));
   
 
/* GET cart listing. */
// GET cartsDetails
router.get('/cartlist', (req, res, next) => {
    // Read cart list
    res.status(200).json(cart);

});


module.exports = router;
