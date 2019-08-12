//exports:对外提供接口的对象
define(function(require,exports,module){
    // require: 模块之间依赖的接口
    // mark1
    // require('./module3.js')

     // mark2
    var a= require('./module3.js').a//当引入的是sea下面的模块的时候，那么require执行完的结果就是exports

    function show(){
        // alert("我是module2，我是同事2")
        console.log(a)
    }
    exports.show=show;
});