const fs = require("fs");
const path = require("path");

let filePath = path.join(__dirname, 'hello.txt');

fs.writeFile(filePath,"hello_w","utf-8",(error)=>{
    if(error){
        console.log(error);
        return
    }
    console.log("寫入完畢!")
})