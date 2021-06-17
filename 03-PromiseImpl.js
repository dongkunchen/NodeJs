const fs = require("fs");
const path = require("path");

let filePath1 = path.join(__dirname, "files", "1.txt");
let filePath2 = path.join(__dirname, "files", "2.txt");
let filePath3 = path.join(__dirname, "files", "3.txt");

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
    console.log(str1);
})