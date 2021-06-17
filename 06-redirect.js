const express = require("express");
const fs = require("fs");
const path = require("path");
//1.引入body-parser
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log("首頁的內容");
    res.send("首頁");
})

app.get("/register", (req, res) => {
   
    let filePath = path.join(__dirname, "views", "register.html")
    
    let content = fs.readFileSync(filePath, "utf-8");
    res.send(content)
})

app.post("/register", (req, res) => {
  
    console.log(req.body)

    let { username, email, password, repassword } = req.body;
    console.log(username, email, password, repassword)
    //res.writeHead(302)//可以用這方法改狀態
    res.redirect("/login");//重定向到login
})

app.get("/login", (req, res) => {
    //獲取文件路徑
    let filePath = path.join(__dirname, "views", "login.html")
    //讀取文件內容
    let content = fs.readFileSync(filePath, "utf-8");
    res.send(content)
})

app.listen(3000, () => {
    console.log("Express web server is listen at 3000 port!");
})

