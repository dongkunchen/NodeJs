const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get('/',(req, res)=>{
    console.log("首頁的內容");
    res.send("首頁");
})

app.get("/register",(req, res)=>{
    //獲取文件路徑
    let filePath = path.join(__dirname,"views","register.html")
    //讀取文件內容
    let content = fs.readFileSync(filePath,"utf-8");
    res.send(content)
})

app.post("/register",(req, res)=>{
    //已經可以處理post請求了
    
    res.send("post ok!")
})


app.listen(3000,()=>{
    console.log("Express web server is listen at 3000 port!");
})