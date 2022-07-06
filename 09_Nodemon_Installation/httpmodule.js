const http = require('http');

const server=http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>This Is A NOdeJS Tutorial.</h1>');
    res.write('<h1>NodeMon Package Installed And Running.</h1>');
    // res.write(req.url);
    res.end();
}).listen(8000,()=>{console.log("Server running on port 8000")});