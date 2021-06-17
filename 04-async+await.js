// function func(a,b){
//     return a+b
// }

// let ret1 = func(10,20);
// let ret2 = func(30,40);
// let ret3 = func(50,60);
// console.log(ret1+ret2+ret3);

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

//await必須放在async function 函數內
//await一般情況放Promise對象
async function func() {
    let data1 = await readFilePromise(filePath1);//直接得到resolve實參
    let data2 = await readFilePromise(filePath2);
    let data3 = await readFilePromise(filePath3);

    console.log(data1 + data2 + data3)
}
//最後必需要調用才能執行代碼
func();