var fs = require('fs');
// console.log(fs);

// .................................... reading a file..................................
// The fs.readFile() method is used to read files on your computer.

fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{                       // readfile(directoryname,type of text,callback_operation(error,data));
if(err) throw err;
console.log(data);                                                                        
});



// .....................................Append A File........................................
// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

fs.appendFile('Hello.txt', 'Hello content!. This Is a Addition of Text to File ', function (err,data) {
    if (err) throw err;
    console.log('Content Saved !');
    //console.log(data);
  });


fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// The fs.appendFile() method appends the specified content at the end of the specified file:

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });

// .................................... open a File.........................................

// The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. 
// If the file does not exist, an empty file is created:

fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });

// .....................................Writing into a file.......................................

// The fs.writeFile() method replaces the specified file and content if it exists. 
// If the file does not exist, a new file, containing the specified content, will be created:

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

// The fs.writeFile() method replaces the specified file and content:

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });

// To rename a file with the File System module,  use the fs.rename() method.
// The fs.rename() method renames the specified file:

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log(`File mynewfile1 Renamed To myrenamedfile.txt!`);
  });


// ......................................Deleting A file..................................

fs.unlink(__dirname+"/hello.txt",(err,data)=>{
    if(err) throw err;
    console.log("deleted Text :"+ data);
});

//   ................................................Upload File.......................................