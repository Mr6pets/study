
/*
    在一个模块中通过var定义的变量，其作用域范围是当前模块，外部不能够直接访问
    如果我们想要一个模块能够访问另外一个模块中的定义的变量，可以：
    1.把变量作为global对象的一个属性，但是这样的方式不建议
    2.使用模块对象,module

*/
// var a=100;
// 1.例子
// global.a=100;//在3.moduleexport.js中可以打印出来a的值


/*
 例子2
 module保存提供当前模块有关的一些信息
 module对象，其中有个子对象 export//在3.moduleexport.js中可以打印出来a的值
*/
// console.log(module);
var a=100;
module.exports.a=a;

/**
 * 在模块作用域，还有一个内置的模块对象，exports 他其实就是module.exports
 */
// exports.a=a;//这里的结果是true

// module.exports=[1,2,3]//exports和module.exports的指向关系已经断开了
// exports.a=200;

exports=[1,2,3];//3.moduleexport.js 打印了m5为空{}
















