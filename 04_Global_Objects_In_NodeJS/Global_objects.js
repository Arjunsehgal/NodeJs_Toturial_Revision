//__dirname
// __filename
// require
// console
// buffer
// module
// exports


//  1. Directory Name.....................................................

 console.log(__dirname)

// 2. FileName.............................................................

 console.log(__filename)

// 3. require..............................................................

var index = require('./index')     //or var index = require('./index.js')

// 4. Buffer

//console.log(name)       // In Php this is possible but in nodejs it is noot posible so we have to export it from index.js 

console.log(index.abc);



