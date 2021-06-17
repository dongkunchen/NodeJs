const fs = require("fs");
const path = require('path');
let filePath = path.join(__dirname,"hello.txt")
//同步讀取: 讀取完才能執行後面的代碼(sync)
//異步讀取: 不用等

const content = fs.readFileSync(filePath, "utf-8");
console.log(content);

