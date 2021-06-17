const express = require('express');
const db = require("./db/handleDB")
const app = express();

app.get("/get_data", (req, res) => {

    (async function () {
       
        let result = await handleDB(res,"studend","find","數據庫查詢錯誤","age<20");
        res.send(result)
    })();//匿名函數自調用



})

app.listen(3000, () => {
    console.log("Express web server is listen at 3000 port!");
})