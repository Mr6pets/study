// 文件系统

//1.引入文件系统模块
var fs = require('fs');
//通过对象调用
var read = fs.readFileSync('read.txt', 'utf8');//同步读取
console.log(read);

fs.writeFileSync('write.txt', read);//同步写入

//异步读取文件
fs.readFile("read.txt", "utf8", function (err, data) {
  if (err) throw err
  console.log(data);
})
//异步写入文件
fs.readFile("read.txt", "utf8", function (err, data) {
  if (err) throw err
  fs.writeFile('write2.txt', data)
})





