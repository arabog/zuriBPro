const http = require('http');
const fs = require('fs');

function send404Response(res) {
          res.writeHead(404, {"Content-Type": "text/plain"})
          res.write("Error 404: Page not found")
          res.end();
}


function onReq(req, res) {
          if(req.method === "GET" && req.url == '/') {
                    res.writeHead(200, {"Content-Type": "text/html"});
                    fs.createReadStream("./index.html").pipe(res);
          }else {
                    send404Response(res)
          }
}


http.createServer(onReq).listen(8888);
console.log(`Server is running you better catch it....`);