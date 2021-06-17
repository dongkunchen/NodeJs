//搭建第一個後端程序
//1.引入http模塊
const http = require("http");
const fs = require("fs");
const path = require("path");
//2.配置服務器程序的端口號
const port = 8080;
//3.創建服務器對象
const server = http.createServer((request, response) => {
    //每一個請求就執行一次這裡的代碼

    //判斷瀏覽器需要的那個資源文件
    let reqUrl = request.url;
    if (reqUrl === "/") {

        //要導入fs跟path讀取文件
        let filePath = path.join(__dirname, "assets", "html", "index.html");
        let content = fs.readFileSync(filePath)

        //遵循HTTP協議設置響應頭信息不然會亂碼
        // response.setHeader("Content-Type", "text/html;charset=utf-8")
        // response.end("<h1>返回數據</h1>")
        //因為index已經有utf-8
        response.end(content)
    }
    else if (reqUrl === "/detail.html") {


        let filePath = path.join(__dirname, "assets", "html", "detail.html");
        let content = fs.readFileSync(filePath)
        response.end(content)
    }
    else if (reqUrl.endsWith(".css")) {
        let filePath = path.join(__dirname, "assets", "css", "index.css");
        let content = fs.readFileSync(filePath)
        response.end(content)
    }
    else {
        response.setHeader("Content-Type", "text/html;charset=utf-8")
        response.end("404錯誤:該資源找不到! ")
    }
})
//4.調用服務器對象的監聽方法讓服務器監聽瀏覽器的請求
server.listen(port, (error) => {
    console.log("WebServer is listening at port 8080!")
})