// 输出
// function log(data){
//     process.stdout.write(data);
// }
// log("hello");

//默认情况下看，输入流是关闭的，要监听处理输入流数据，首先要开启输入流
ProcessingInstruction.stdin.resume();
//用于监听用户的输入数据
Process.stdin.on('data',function(chunk){
    console.log('用户输入了'+chunk)
});
