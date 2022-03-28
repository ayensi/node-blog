const express = require('express')

const ejsLayout = require('express-ejs-layouts')
const mongoose = require("mongoose")

const app = express()
var session = require('express-session');

var cookieParser = require('cookie-parser');

var flash = require('connect-flash');



//ASSETS
app.use('/assets', express.static(__dirname + '/assets'));
app.use(ejsLayout)
app.set('layout', './layouts/full-width')
app.use(cookieParser('secret'));

app.use(session({cookie: { maxAge: 60000 }}));

app.use(flash());

//ROUTES
const articles = require('./routes/articles.js')
let Article = require('./models/Article')
app.use('/articles',articles)

//VIEW ENGINE
app.set('view engine','ejs')


//PORT
const PORT = process.env.PORT || 3000


//DB CONNECTION 
const uri = require('./config/config')
const client = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

Article.find({}).exec(function(err, docs){
    if(err) throw err

console.log(docs)
})
app.get('/',(req,res)=>{

    
})


app.listen(PORT,()=>{console.log(`Server ${PORT} portunda çalışıyor`)})