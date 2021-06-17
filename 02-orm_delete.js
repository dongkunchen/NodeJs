const express = require('express');
const db = require("./db/nodejs-orm")
const app = express();

app.get("/get_data",(req, res)=>{

    
    let Students = db.model("student");    
    
    //刪除單條
    //     Students.delete("id=21",(err,result)=>{
    //       console.log(result)
    // })   
    //清空
    //     Students.delete((err,result)=>{
    //       console.log(result)
    // })   
  
})

app.listen(3000, ()=>{
    console.log("Express web server is listen at 3000 port!");
})