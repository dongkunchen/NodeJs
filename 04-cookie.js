const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();


app.use(cookieParser);



app.get("/set_cookie", (req, res) => {

    res.cookie("name", "nodejs", { maxAge: 1000 * 60 * 60 });
    res.cookie("age", 11);
    res.send("設置cookie信息")
})
app.get("/get_cookie", (req, res) => {

    console.log(req.cookie);
    let name = req.cookie.name;
    let age = req.cookie["age"];
    res.send("獲取到cookie信息為:" + name + "," + age)
})



app.listen(3000, () => {
    console.log("Express web server is listen at 3000 port!");
})