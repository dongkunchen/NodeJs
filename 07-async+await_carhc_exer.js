// async function func(){
//     let data1 = await 123;
//     console.log("data1:", data1)
//     return data1
// }

// let result = func();
// console.log(result);//Promise { <pending> }返回是Promise對象

const fs = require("fs");
const path = require("path");
const util = require("util");

let filePath1 = path.join(__dirname, "files", "1.txt");
let filePath2 = path.join(__dirname, "files", "2.txt");
let filePath3 = path.join(__dirname, "files", "3.txt");


let readFilePromise = util.promisify(fs.readFile);



//await必須放在async function 函數內
//await一般情況放Promise對象
async function func() {
    try {
        let data1 = await readFilePromise(filePath1);//直接得到resolve實參   
        let data2 = await readFilePromise(filePath2);
        let data3 = await readFilePromise(filePath3);
        //let content = data1 + data2 + data3
        console.log(data1 + data2 + data3)
    } catch (error) {
        console.log(error);
    } finally {
        console.log("一定實現");
    }


}
//最後必需要調用才能執行代碼

//外部捕獲異常
// func().catch(error=>{
//     console.log(error)
// }).finally(() =>{
//     console.log("一定成功")
// })

//內部捕獲最後調用
func();