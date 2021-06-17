const express = require("express");
const passportRouter = require("./routes/passport");
const utils = require("./utils");//檔名index可以省略
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//統一放到utils
// function checkLogin(req,res,next){
//     console.log("執行passportRouter之前先執行這句代碼")
//     //可以校驗
//     if(true){
//         res.send("登錄校驗沒有通過")
//         return
//     }
//     next();//去執行app.use後面的這個函數裡面的代碼
// }


app.use(utils.checkLogin,passportRouter);

app.listen(3000,()=>{
    console.log("Express web server is listen at 3000 port!")
})