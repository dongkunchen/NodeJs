
const express = require("express");
const path = require("path");
const app = express();

//以下五句代碼是模板引擎初始化
//引入express-art-template使用對應的引擎 art改html
app.engine('html', require('express-art-template'));
//項目環境設置
//生產環境production
//開發環境 development
//view 要改 view options
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
//設置在那一個目錄下查找模板文件
app.set('views', path.join(__dirname, 'views'));
//設置模板的後綴名為html
app.set('view engine', 'html');


app.get("/",(req,res)=>{

    let data= {
        num1: 20,
        num2: 30,
        user:{
            name:"張三",
            age:18,
            email:"zhangsan@gmail.com"
        },
        books:["西遊記","三國演義"]
    }
    
    res.render("index",data);//返回index頁面不需要後綴,後綴前面已經設置
})

app.listen(3000,()=>{
    console.log("Express web server is listen at 3000 port!")
})