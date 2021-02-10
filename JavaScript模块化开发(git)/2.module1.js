//exports:对外提供接口的对象
define(function(require,exports,module){//这三个参数是固定的的不能随意改动
    function show(){
        alert("我是module1,我是同事1")
    }
    exports.show=show;
});