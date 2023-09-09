const express = require('express')
const path = require('path')
const fs = require('fs')
const rootDir = require('../util/path')

const router = express.Router()


router.get('/contact-us', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'constUs.html'))
})

module.exports = router