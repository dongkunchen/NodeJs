const express = require('express');
const db = require("./db/nodejs-orm")
const app = express();

app.get("/get_data",(req, res)=>{

    
    let Students = db.model("student");    
    
    Students.sql("select * from students",(err,data)=>{
              res.send(data);
    })   
    
  
})

app.listen(3000, ()=>{
    console.log("Express web server is listen at 3000 port!");
})