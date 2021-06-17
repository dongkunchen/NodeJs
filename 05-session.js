const express = require("express");
const cookieSession = require("cookie-session")
const app = express();

app.use(cookieSession({
    name:"my_session",
    keys:["qwertyuiop"],
    maxAge: 1000 * 60 * 60 * 24 * 2
}))

app.get("/set_session",(req, res)=>{
    req.session["name"] = "nodejs_session";
    req.session["age"] = 12;
    res.send("設置session");
})

app.get("/get_session",(req, res)=>{
    let name = req.session["name"];
    let age = req.session["age"];
    res.send("獲取到session數據為:"+name+","+age);
})






app.listen(3000, ()=>{
    console.log("Express web server is listen at 3000 port!");
})