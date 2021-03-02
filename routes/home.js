const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require("fs"); 
router.use(cors());

router.use(bodyParser.urlencoded({ extended: true, limit: '100mb', parameterLimit: 1000000 }));

module.exports = router;
