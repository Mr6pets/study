var http=require('http');
var fs=require('fs');
var io=require('socket.io')
var documentRoot='E:/gitHub代码仓库/study/HTML5详解/3跨文档消息通信/websocket/www/';
var httpServer=http.createServer(function(req,res){
    console.log('服务器开启成功');
    var url=req.url;
    // console.log(url);
    var file=documentRoot+url;
    // console.log(file);
    fs.readFile(file,function(err,data){
        if(err){
            res.writeHeader(404,{
                'content-type':'text/html;charset="utf-8"'
            });
            res.write('<h1>404</h1><p>要找的页面不存在</p>');
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type':'text/html;charset="utf-8"'
            });
            res.write(data);
            res.end();
        }
    })

}).listen('8888');

var socket=io.listen(httpServer);
socket.sockets.on('connection',function(socket){
    // socket
    console.log('有主机通过socket进来了')
});