const http = require("http");

const express = require("express");

const bodyParser = require('body-parser')

const adminRouters = require('./routes/admin');

const shopRouters = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use('/shop', shopRouters);
app.use('/admin', adminRouters);

app.use((req, res, next)=>{
    res.status(404).send('<h1>page not fount</h1>')
})

app.listen(3000);
