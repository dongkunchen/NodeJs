const express = require("express");
const app = express();

app.get("/index",(req, res)=>{
    
    console.log(req.query)
    console.log(req.query.name ,req.query.age)

    res.send("index首頁")
})

app.get("/list",(req, res)=>{
    //http://127.0.0.1:3000/list?curPage=1&age=11
    console.log(req.query)
    res.send(req.query.curPage)
})

app.listen(3000,()=>{
    console.log("Express web server is listen at 3000 port!");
})