const express = require('express');
const db = require("./db/nodejs-orm")
const app = express();

app.get("/get_data", (req, res) => {

    //async function get_data() {//原始函數
    (async function () {//匿名自調用
        let Students = db.model("student");
        //如果查詢成功result 接收了 data
        //如果失敗接收err
        let result
        try {
            result = await new Promise((resolve, reject) => {
                Students.find((err, data) => {
                    if (err) reject(err);
                    resolve(data);
                })
            })

        } catch (err) {
            console.log(err);
            res.send({errMsg: "數據庫查詢出錯"});
            return
        }
        res.send(result)
    })();//匿名函數自調用



})

app.listen(3000, () => {
    console.log("Express web server is listen at 3000 port!");
})