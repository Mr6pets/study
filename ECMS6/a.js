// let n=100;
// var m=20;
// function add(x,y){
//     return x+y
// }
// // export {n,m,add};//导出一个n
// export {n as newN,m,add};

// export default 1000;//默认导出的的东西 只能有一个

//===============================================================

// var n=100;
// var m=2;
// function add(x,y){
//     return x+y
// }
// export {n as newN,m,add};
// export default add;

//==================================

let n=100;
var m=20;
function add(x,y){
    return x+y
}
console.log("a.js被加载了......")
export {n as newN,m,add};

export default 1000;//默认导出的的东西 只能有一个



