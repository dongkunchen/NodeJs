const fs = require("fs");
const path = require("path");

let filePath1 = path.join(__dirname, "files", "1.txt");

let p1 = new Promise((resolve, reject) => {

    fs.readFile(filePath1, "utf-8", (error, data) => {
        if (error) {
            reject(error);
        }
        resolve(data);

    });
})
    p1.then((data) => {
        console.log("成功了");
        console.log(data)
    }).catch((error) => {
        console.log(error)
    }).finally(() => {
        //這裡的代碼不管成功或失敗都會執行
        console.log("我一定執行");
    })