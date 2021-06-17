const express = require('express');
const db = require("./db/nodejs-orm")
const app = express();

app.get("/get_data",(req, res)=>{

    
    let Students = db.model("student");    
    
    //修改數據
    //只傳一個對象表示把所有數據都修改age為30
    //     Students.update({age:30},(err,result)=>{
    //       console.log(result)
    // })   
    //修改某條件數據
    Students.update("id=1",{age:30},(err,result)=>{
              console.log(result)
    })   
    
  
})

app.listen(3000, ()=>{
    console.log("Express web server is listen at 3000 port!");
})