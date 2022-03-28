const express = require('express')
var session = require('express-session');

var cookieParser = require('cookie-parser');

var flash = require('connect-flash');
const app = express()
app.use(express.urlencoded({extended: false}))
const router = express.Router()
app.use(cookieParser('secret'));

app.use(session({cookie: { maxAge: 60000 }}));

app.use(flash());

const Article = require('../models/Article')

router.get('/',(req,res)=>{
    res.send('Articles homepage')
})
router.get('/new',(req,res)=>{
    res.render('new',{data:{title:'New Article'}})
})

module.exports = router