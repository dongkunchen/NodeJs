//搭建第一個後端程序
//1.引入http模塊
const http = require('http');
//2.配置服務器程序的端口號
const port = 8080;
//3.創建服務器對象
const server = http.createServer((request, response)=>{
    //request請求 response響應
    
    //每接收到一次請求就來執行一次這裡的代碼
    response.write("hello nodejs http2")//可以寫響應體
    response.end("hello nodejs http")//響應工作結束後面不能再寫東西會報錯
    //response.end()

})
//4.調用服務器對象的監聽方法讓服務器監聽瀏覽器的請求
server.listen(port,(error)=>{
    console.log(error);
    console.log("WebServer is listening at port 8080!")
})