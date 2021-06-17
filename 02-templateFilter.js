//pathinfo參數 又叫pathname參數
const express = require("express");
//1.引入art-template
const template = require("art-template");
const path = require("path");
const app = express();

app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

//2.過濾函數創建 timestamp是過濾器名子
// template.defaults.imports.timestamp = function(value){
//     return 過濾後數據
// };

template.defaults.imports.timestamp = function(value){
    //value接收前面的數據

    return value * 1000
};

app.get("/",(req, res)=>{

    let data = {
        num:20
    }
    res.render("index", data)
})


app.listen(3000, ()=>{
    console.log("Express web server is listen at 3000 port!");
})