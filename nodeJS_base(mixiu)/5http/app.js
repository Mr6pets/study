//http创建服务器

var http = require('http');
//创建本地服务器
var server = http.createServer(function (req, res) {
  console.log("客户端向服务器发送请求：" + req.url);
  // 给客户端返回一个信息
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("server is working")

})
//服务对象监听端口号 和地址
server.listen(3333, "127.0.0.1");
console.log("server is running....")




