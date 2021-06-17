
const express = require("express");
const path = require("path");
const app = express();

app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get("/child",(req, res)=>{
    
    res.render("child")
})



app.listen(3000, ()=>{
    console.log("Express web server is listen at 3000 port!");
})