const express = require('express');
const db = require("./db/db")
const app = express();




app.get("/get_data",(req, res)=>{
    db.query('select * from student',(err,data)=>{
        console.log(data);
    })
    res.send("hello world");
})

app.listen(3000, ()=>{
    console.log("Express web server is listen at 3000 port!");
})