const express = require('express')


const router = express.Router();

// /admimn/add-product
router.get('/add-product',(req, res, next) => {
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">add</button>')
    
});

// /admin/add-product => rout
router.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});
module.exports = router;