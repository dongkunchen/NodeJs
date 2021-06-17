
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

//在一個項目中會有一個靜態資源文件夾
app.use(express.static(__dirname+"/public"));//在public 查找資源
//4.處裡請求
app.get("/",(request,response)=>{
    //第一個形參跟請求對象相關數據
    //第二個形參跟響應對象相關工作
    response.send("hello express 框架!");
})

app.get("/login", (req, res) => {
    //獲取文件路徑
    let filePath = path.join(__dirname, "views", "login.html")
    //讀取文件內容
    let content = fs.readFileSync(filePath, "utf-8");
    res.send(content)
})

//3.監聽是否有請求
app.listen(3000,()=>{
    console.log("Express web server is listen at 3000 port!")
})