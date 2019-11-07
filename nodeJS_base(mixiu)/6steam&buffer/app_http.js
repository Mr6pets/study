var http = require('http');
var fs = require('fs');
//搭建服务器
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-type": "text/plain" });
  //读取文件流
  var myReadStream = fs.createReadStream(__dirname + "/read.txt", "utf8");
  //管道事件 将读取到的文件通过管道事件放到请求中去
  myReadStream.pipe(res)
})
//监听端口和地址
server.listen(3333, '127.0.0.1')
console.log("server is running.....")