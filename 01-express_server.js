//yarn init -y
//安裝express yarn add express

//1.引入express

const express = require("express");

//2.創建app對象
const app = express();

//4.處裡請求
app.get("/",(request,response)=>{
    //第一個形參跟請求對象相關數據
    //第二個形參跟響應對象相關工作
    response.send("hello express 框架!");
})

//3.監聽是否有請求
app.listen(3000,()=>{
    console.log("Express web server is listen at 3000 port!")
})