//1.引入模块
var fs = require('fs');
//2.使用模块对象调用方法
//删除文件
// fs.unlink("write2.txt", function (err) {
//   if (err) throw err
//   console.log("文件删除成功")
// })

//创建文件夹 同步(创建一个名为stuff的文件夹)
// fs.mkdirSync('stuff');

//删除文件夹 同步
// fs.rmdirSync('stuff');

// 异步删除文件夹和创建文件夹 
//创建一个文件夹 并且读取write2文件将读取的内容写到stuff文件夹下的writeMe.txt中
// fs.mkdir('stuff', function () {
//   fs.readFile("write2.txt", "utf8", function (err, data) {
//     if (err) throw err
//     fs.writeFile('./stuff/writeMe.txt', data)
//   })
// })

// 异步删除文件夹
// 1.先删除文件夹中的文件 2.再删除外部的文件夹
fs.unlink("./stuff/writeME,TXT", function () {
  fs.rmdir("stuff", function (err) {
    if (err) throw err
    console.log("文件夹删除成功")
  })
})
