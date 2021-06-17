const express = require("express");
const fs = require("fs");
const path = require("path");
//1.引入body-parser
const bodyParser = require("body-parser");
const app = express();

//2.把bodyParser註冊到app下
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log("首頁的內容");
    res.send("首頁");
})

app.all("/register", (req, res) => {

    console.log(req.method);

    if (req.method === "GET") {
        let filePath = path.join(__dirname, "views", "register.html")
        let content = fs.readFileSync(filePath, "utf-8");
        res.send(content)
    } else if (req.method === "POST") {
        console.log(req.body);
        let { username, email, password, repassword } = req.body;
        console.log(username, email, password, repassword)
        res.redirect("/login");
    }
})

// app.get("/register", (req, res) => {
//     //獲取文件路徑
//     let filePath = path.join(__dirname, "views", "register.html")
//     //讀取文件內容
//     let content = fs.readFileSync(filePath, "utf-8");
//     res.send(content)
// })

// app.post("/register", (req, res) => {
//     //已經可以處理post請求了
//     //獲取用戶提交的參數
//     //3.獲取參數通過req.body獲取
//     console.log(req.body)

//     let { username, email, password, repassword } = req.body;
//     console.log(username, email, password, repassword)
//     //res.writeHead(302)//可以用這方法改狀態
//     res.redirect("/login");//重定向到login
// })

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

