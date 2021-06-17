//搭建第一個後端程序
//1.引入http模塊
const http = require("http");
const url = require("url")
//2.配置服務器程序的端口號
const port = 8080;
//3.創建服務器對象
const server = http.createServer((request, response)=>{
    //獲取請求信息request
    //1.獲取請求路徑
    let reqUrl = request.url
    console.log(reqUrl);
    //2.獲取請求方式
    let reqMethod = request.method
    console.log(reqUrl,reqMethod)
    //3.獲取get請求參數(要引入url模塊)
    let obj = url.parse(reqUrl,true);
    console.log(obj.query);//obj.query.key獲得value


    //每接收到一次請求就來執行一次這裡的代碼
    response.write("hello nodejs http2")//可以寫響應體
    response.end()

})
//4.調用服務器對象的監聽方法讓服務器監聽瀏覽器的請求
server.listen(port,(error)=>{
    console.log(error);
    console.log("WebServer is listening at port 8080!")
})