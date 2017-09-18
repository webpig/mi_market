const express = require('express')
const url = require('url')
const router = express.Router()
router.get('/', function(req, res){
    res.render('index')

})
router.get('/view', function(req, res){
    let srcArr= url.parse(req.url).search.split('id=');
    let len = srcArr.length;
    console.log(srcArr[len-1])
    res.render('view',{
        src:srcArr[len-1]
    })
})
router.get('/cart', function(req, res){
    res.render('cart')
})
router.get('/signin', function(req, res){
    res.render('signin')
})
router.get('/signup', function(req, res){
    res.render('signup')
})
router.get('/api',(req, res)=>{
    res.json({
        foo:'a',
        bar:'b',
        new:'c'
    })
})
module.exports = router;