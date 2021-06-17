const express = require('express');
const db = require("./db/nodejs-orm")
const app = express();

app.get("/get_data",(req, res)=>{

    //使用orm查詢數據庫
    //創建模型: 需要操作那個數據庫表
    let Students = db.model("student");
    Students.find((err,data)=>{
        res.send(data)
    })   
  
})

app.listen(3000, ()=>{
    console.log("Express web server is listen at 3000 port!");
})