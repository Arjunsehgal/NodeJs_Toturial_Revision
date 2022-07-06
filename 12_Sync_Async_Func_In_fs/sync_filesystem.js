const fs = require("fs");

try {
    
    var data = fs.readFileSync(__dirname+"/hello.txt","utf8");
    console.log(data);

} catch (error) {
    console.log(error);
}

console.log("File ended successfully !");
