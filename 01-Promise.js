const fs = require("fs");
const path = require("path");

let filePath1 = path.join(__dirname, "files", "1.txt");
// fs.readFile(filePath,"utf-8",(error,data)=>{
//     if (error){
//         console.log(error);
//         return
//     }
//     console.log(data);
// })

//創建Promise對象
//第一個成功形參 resolve
//第二個失敗形參 reject
let p1 = new Promise((resolve, reject) => {

    fs.readFile(filePath1, "utf-8", (error, data) => {
        if (error) {
            reject(error);//調用的是p1.then 第二個函數
        }
        resolve(data);//調用的是p1.then 第一個函數
    })

});
p1.then((data)=>{
    console.log("成功了");
    console.log(data)

},(error)=>{
    console.log("失败了");
    console.log(error)
})