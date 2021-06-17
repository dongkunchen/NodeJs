//pathinfo參數 又叫pathname參數
const express = require("express");
const path = require("path");
const app = express();

app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get("/list",(req, res)=>{
    
    res.render("list")
})

app.get("/detail/:id/:type",(req, res)=>{
    console.log(req.params);
    console.log(req.params.id)
    console.log(req.params.type)

    res.send("detail詳情頁"+req.params.id +req.params.type)
})


app.listen(3000, ()=>{
    console.log("Express web server is listen at 3000 port!");
})