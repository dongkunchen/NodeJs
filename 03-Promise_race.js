const fs = require("fs");
const path = require("path");
const util = require("util");

let filePath1 = path.join(__dirname, "files", "1.txt");
let filePath2 = path.join(__dirname, "files", "2.txt");
let filePath3 = path.join(__dirname, "files", "3.txt");


let readFilePromise = util.promisify(fs.readFile);


let p1 = readFilePromise(filePath1, "utf-8");
let p2 = readFilePromise(filePath2, "utf-8");
let p3 = readFilePromise(filePath3, "utf-8");
// race() 方法格式
// Promise.race([Promise對象1,Promise對象2]).then((data)=>{     
//    p1和p2只要有一個執行成功了,就執行這裡的代碼1次而且這裡的代碼只執行一次 
// })


Promise.race([p1, p2, p3]).then((data) => {
    //data是一個數組,數組的每一個元素就是上面Promise對象對象成功(resolve)值
    //console.log(data);
    //數組的操作join方法,把數組中每一個元素按照一定格式拼接起來
    //console.log(data.join(","));
    
    console.log(data);//我
   
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