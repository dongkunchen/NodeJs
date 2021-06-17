const fs = require("fs");
const path = require("path");
const util = require("util");

let filePath1 = path.join(__dirname, "files", "1.txt");
let filePath2 = path.join(__dirname, "files", "2.txt");
let filePath3 = path.join(__dirname, "files", "3.txt");
let filePath4 = path.join(__dirname, "files", "yamei1.txt");

let readFilePromise = util.promisify(fs.readFile);
let writrFilePromise = util.promisify(fs.writeFile);

let p1 = readFilePromise(filePath1, "utf-8");
let p2 = readFilePromise(filePath2, "utf-8");
let p3 = readFilePromise(filePath3, "utf-8");
// all() 方法格式
// Promise.all([Promise對象1,Promise對象2]).then((data)=>{
//     //data是一個數組,數組的每一個元素就是上面每一個Promise對象成功(resolve)值
// })


Promise.all([p1, p2, p3]).then((data) => {
    //data是一個數組,數組的每一個元素就是上面Promise對象對象成功(resolve)值
    //console.log(data);
    //數組的操作join方法,把數組中每一個元素按照一定格式拼接起來
    //console.log(data.join(","));
    let content = data.join("")
    console.log(content);
    writrFilePromise(filePath4, content)
}).catch(error => {
    console.log(error);
})



    // p1.then((data) => {
    //     console.log("成功了");
    //     console.log(data)
    // }).catch((error) => {
    //     console.log(error)
    // }).finally(() => {
    //     //這裡的代碼不管成功或失敗都會執行
    //     console.log("我一定執行");
    // })