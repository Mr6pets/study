/**
 * __filename放回当前模块文件的解析后的绝对路径 该属性其实并非是全局的 而是模块作用域下的
 * __dirname 返回当前模块文件所在目录的解析后的绝对路径 该属性也不是全局的 而是模块作用域下的
 */
require('./4');

// console.log(__dirname);
// console.log(__filename);

setInterval(function(){
    var d=new Date();
    console.log('现在是：'+d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDay()+'日'+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds())
},1000)


































