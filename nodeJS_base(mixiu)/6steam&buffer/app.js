var fs = require("fs");
//读取文件流
// var myReadStream = fs.createReadStream(__dirname + '/read.txt', "utf8");
// // console.log(myReadStream);//对象
// //myReadStream对象中有data方法
// myReadStream.on("data", function (chunk) {
//   console.log("---------我是分割线------------");
//   console.log(chunk)
// })

//读取文件流
var myReadStream = fs.createReadStream(__dirname + '/read.txt', "utf8");
//写入文件流
var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');

//读取文件流
var myWriteStream_pipe = fs.createWriteStream(__dirname + '/write_pipe.txt');
// pipe管道事件 读取到的read.txt流通过管道事件添加到write_pipe.txt中去
myReadStream.pipe(myWriteStream_pipe)

//写入读取到的read.txt内容
var times = 0;
myReadStream.on("data", function (chunk) {
  times++
  console.log('---------我是分割线' + times + '------------');
  // 写入数据
  myWriteStream.write(chunk);
})