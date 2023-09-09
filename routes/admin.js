const express = require('express')
const path = require('path')

const rootDir = require('../util/path');

const router = express.Router();

// /admimn/add-product
router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add.product.html'))
    
});

// /admin/add-product => rout
router.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});
module.exports = router;