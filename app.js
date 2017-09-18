const localStorage = require('localStorage')
const express = require('express')
const path = require('path')
const app = express()

const router = require('./routers')

app.set('views', path.join( __dirname+'/views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join('public')))
app.use(router)
app.listen(3000)