var http=require('http');
var serv=http.createServer(function(req,res){
    console.log('有新的主机进来了');
    // res.writeHeader(200,{
    //     'content-type':'text/html;charset="utf-8"'
    // });
    // res.write('这里是输出的文本内容')

    // res.writeHeader(404,{
    //     'content-type':'text/html;charset="utf-8"'
    // });
    // res.write('你要的资源飞走了');
    // res.end();

    console.log(req);
}).listen(8888);
console.log('服务器开启成功')