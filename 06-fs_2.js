const fs = require("fs");
const path = require('path');
let filePath = path.join(__dirname,"hello.txt")
//同步讀取: 讀取完才能執行後面的代碼(sync)
//異步讀取: 不用等



//異步
fs.readFile(filePath,"utf8",(error,data) => {
    if(error) {
        console.log(error);
        return
    }
    console.log(data);
})