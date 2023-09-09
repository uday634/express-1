const http = require("http");

const express = require("express");

const bodyParser = require('body-parser')

const adminRouters = require('./routes/admin');

const path = require('path');

const shopRouters = require('./routes/shop')

const contactUsRouter  = require('./routes/contact-us')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(shopRouters);
app.use( adminRouters);
app.use(contactUsRouter)

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views','404err.html'))
})

app.listen(3000);
