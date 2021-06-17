//搭建第一個後端程序
//1.引入http模塊
const http = require("http");
const url = require("url")
//2.配置服務器程序的端口號
const port = 8080;
//3.創建服務器對象
const server = http.createServer((request, response)=>{
    //獲取請求信息request
    
    //獲取POST請求參數(要引入url模塊)
    //先獲取用戶的用戶名密碼:
    //以事件的方式來接收,事件名是data,一旦接收post請求,就會觸發這裡代碼執行
    request.on("data",(postData)=>{
        //這裡的代碼一旦接收post請求就會觸發這裡的代碼
        console.log(postData.toString());
    })
   

    //每接收到一次請求就來執行一次這裡的代碼
    response.write("hello nodejs http2")//可以寫響應體
    response.end()

})
//4.調用服務器對象的監聽方法讓服務器監聽瀏覽器的請求
server.listen(port,(error)=>{
    console.log(error);
    console.log("WebServer is listening at port 8080!")
})