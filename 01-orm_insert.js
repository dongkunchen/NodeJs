const express = require('express');
const db = require("./db/nodejs-orm")
const app = express();

app.get("/get_data",(req, res)=>{

    
    let Students = db.model("student");    
    //     //增加單條
    //     Students.insert({name:'趙雲',age:20},(err,data)=>{
    //       console.log(data);
    //       res.send(data);
    // })   
        //增加多條
        Students.insert([{name:'劉備'},{name:'關羽'},{name:'張飛'}],(err,result)=>{
          console.log(result);
          res.send("添加成功");
    })   
  
})

app.listen(3000, ()=>{
    console.log("Express web server is listen at 3000 port!");
})