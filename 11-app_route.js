const express = require("express");
const bodyParser = require("body-parser");
const passportRouter = require("./routes/passport");//引入passport裡面路由對象
const indexRouter = require("./routes/index");//引入passport裡面路由對象
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//把路由對象註冊到app
app.use(passportRouter)
app.use(indexRouter)




app.listen(3000, () => {
    console.log("Express web server is listen at 3000 port!");
})

