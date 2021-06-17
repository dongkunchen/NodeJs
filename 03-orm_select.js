const express = require('express');
const db = require("./db/nodejs-orm")
const app = express();

app.get("/get_data",(req, res)=>{

    //使用orm查詢數據庫
    //創建模型: 需要操作那個數據庫表
    let Students = db.model("student");
    //     Students.find(["name","age"],(err,data)=>{
    //         res.send(data)
    // })   
    //     Students.find("age > 18",(err,data)=>{
    //         res.send(data)
    // })   
        Students.find("name='張無忌'",(err,data)=>{
            res.send(data)
    })   
  
})

app.listen(3000, ()=>{
    console.log("Express web server is listen at 3000 port!");
})