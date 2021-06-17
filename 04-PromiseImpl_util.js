const fs = require("fs");
const path = require("path");
const util = require("util")

let filePath1 = path.join(__dirname, "files", "1.txt");
let filePath2 = path.join(__dirname, "files", "2.txt");
let filePath3 = path.join(__dirname, "files", "3.txt");
let filePath4 = path.join(__dirname, "files", "yamei.txt");

//方式三
let readFilePromise = util.promisify(fs.readFile)//返回一個Promise對象 讀取
let writeFilePromise = util.promisify(fs.writeFile)//返回一個Promise對象 寫入
/*方式二封裝成函數
function readFilePromise(filePath) {
    return new Promise((resolve, reject) => {

        fs.readFile(filePath, "utf-8", (error, data) => {
            if (error) {
                reject(error);
            }
            resolve(data);
        })

    });
}
*/
//方式一
// let p2 = new Promise((resolve, reject) => {

//     fs.readFile(filePath2, "utf-8", (error, data) => {
//         if (error) {
//             reject(error);
//         }
//         resolve(data);
//     })

// });

// let p3 = new Promise((resolve, reject) => {

//     fs.readFile(filePath3, "utf-8", (error, data) => {
//         if (error) {
//             reject(error);
//         }
//         resolve(data);
//     })

// });
let p1 = readFilePromise(filePath1);
let p2 = readFilePromise(filePath2);
let p3 = readFilePromise(filePath3);

let str1 = "";

p1.then((data) => {
    str1 += data;
    return p2
}, (error) => {
    console.log("讀取文件失敗", error);
}).then((data) => {
    str1 += data;
    return p3
}).then((data) => {
    str1 += data;
    console.log(str1)
    writeFilePromise(filePath4, str1)//寫入文件
})