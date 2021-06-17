const fs = require("fs")

let namelist = fs.readFileSync(__dirname)

//fs.renameSync("00-xxx.js","[day03]00-xxx.js")

namelist.forEach(item =>{
    if(item.endsWith(".js")){
        fs.renameSync(item,'[day03]${item}');
    }

})