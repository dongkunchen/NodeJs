const fs = require("fs");
const path = require("path");

let filePath1 = path.join(__dirname, "files", "1.txt");

let p1 = new Promise((resolve, reject) => {

    fs.readFile(filePath1, "utf-8", (error, data) => {
        if (error) {
            reject(error);
        }
        resolve(data);
    })

});

//then鏈式調用的特點
//1.第一個then不管成功失敗都會執行第二個then
//2.then函數裡面可以有返回職被下一個then形參接收
//3.最重要的一個如果返回是一個Promise對象下一個then的形參接收到不是這個
//  Promise對象,而是這個Promise對象內部的resolve函數的實際形參
p1.then((data)=>{
    console.log("成功了");
    return p1
},(error)=>{
    console.log("失败了");
    return 456
}).then((data)=>{
    console.log("第二個then",data)
    return "2222"
}).then((data)=>{
    console.log("第三個then",data)
})