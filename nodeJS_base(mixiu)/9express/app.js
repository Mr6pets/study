var http = require('http');
var fs = require('fs');
//搭建服务器
var server = http.createServer(function (req, res) {
  if (req.url !== '/favicon.ico') {
    if (req.url === '/home' || req.url === '/') {
      res.writeHead(200, { "Content-type": "text/html" });
      fs.createReadStream(__dirname + "/index.html", "utf8").pipe(res)
    } else if (req.url == '/count') {
      res.writeHead(200, { "Content-type": "text/html" });
      fs.createReadStream(__dirname + "/count.html", "utf8").pipe(res)
    } else if (req.url == '/api/data') {
      // var data = [{
      //   "name": "alvis",
      //   "age": 18,
      //   "job": "monky"
      // }, {
      //   "name": "alvis1",
      //   "age": 181,
      //   "job": "monky1"
      // }];
      // res.writeHead(200, { "Content-type": "text/json" });
      // res.end(JSON.stringify(data));

      res.writeHead(200, { "Content-type": "text/html" });
      fs.createReadStream(__dirname + "/api/data.html", "utf8").pipe(res)
    }
  }

})
//监听端口和地址
server.listen(3333, "127.0.0.1");
console.log("server is running....")