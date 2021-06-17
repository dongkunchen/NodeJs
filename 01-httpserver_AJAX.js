//搭建第一個後端程序
//1.引入http模塊
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8081;
let uname = "zhangsan";
let pwd = "123456";

//相同代碼封裝到函數
function responseEnd(response, dirName, fileName){
    let filePath = path.join(__dirname, "assets", dirName, fileName);
    let content = fs.readFileSync(filePath)
    response.end(content)
}

const server = http.createServer((request, response) => {
   
    let reqUrl = request.url;
    if (reqUrl === "/" || reqUrl==="/index.html") {
        responseEnd(response,"html", "index.html")
    }

    else if (reqUrl === "/detail.html") {
        responseEnd(response,"html", "detail.html")
    }

    else if (reqUrl === "/jquery_get.html") {
        responseEnd(response,"html", "jquery_get.html")
    }

    else if (reqUrl === "/jquery_post.html") {
        responseEnd(response,"html", "jquery_post.html")
    }

    else if (reqUrl === "/js/jquery.min.js") {
        responseEnd(response,"js", "jquery.min.js")
    }

    else if (reqUrl === "/login.html") {
        responseEnd(response,"html", "login.html")
    }

    else if (reqUrl === "/get_data") {       
        response.end("接收到ajax的get請求這是響應給瀏覽器的數據")
    }

    else if (reqUrl === "/login_post") {     
        //處理post請求  
        
        request.on("data",(postData)=>{
            

            //獲取瀏覽器傳過來的數據
            let {username,password} = JSON.parse(postData.toString());
            if(username===uname && password===pwd){
                response.end("登錄成功!")
            }else{
                response.end("用戶名或密碼錯誤,登陸失敗!")
            }

        })
    }

    else if (reqUrl.endsWith(".css")) {
        responseEnd(response,"css", "index.css")
    }

    else if (reqUrl.endsWith(".js")) {
        responseEnd(response,"js", "index.js")
    }

    else {
        response.setHeader("Content-Type", "text/html;charset=utf-8")
        response.end("404錯誤:該資源找不到! ")
    }
})

server.listen(port, (error) => {
    console.log("WebServer is listening at port 8081!")
})