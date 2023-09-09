const express = require('express')
const path = require('path')
const fs = require('fs')
const rootDir = require('../util/path')

const router = express.Router()


router.get('/contact-us', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'constUs.html'))
    
})
router.get('/successful',(req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'success.html'))
})

module.exports = router