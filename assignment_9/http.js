const http = require('http');

http.createServer((req,res) => {
    console.log("Server started..");
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write("hello");
    res.end();
}).listen(3000);


