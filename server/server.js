const http = require('http');
const fs = require('fs');

var readable = fs.createReadStream(__dirname + '/index.html');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    readable.pipe(res);
}).listen(3000);