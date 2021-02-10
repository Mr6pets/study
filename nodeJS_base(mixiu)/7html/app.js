var http = require('http');
var fs = require('fs');
//创建一个本地服务器
//读取html
var server = http.createServer(function (req, res) {
  if (req.url !== '/favicon.ico') {
    console.log("客户端向服务器发送请求：" + req.url);
    res.writeHead(200, { "Content-type": "text/html" });
    var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
    myReadStream.pipe(res);
  }
})
//读取html
// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { "Content-type": "application/json" });
//   var myReadStream = fs.createReadStream(__dirname + "/per.json", "utf8");
//   myReadStream.pipe(res);
// })
//监听端口号和地址
server.listen(3333, '127.0.0.1');
console.log("server is running....")