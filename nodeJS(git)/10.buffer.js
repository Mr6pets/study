/**
 * global buffer类
 * 一个用于更好的操作二进制的类
 * 我们在操作文件或者网络数据的时候，其实操作的就是二进制的数据流 node为我们提供了一个更加方便的去操作操作这种数据流的类buffer 他们是一个全局的类
 */

 /**
  *new Buffer(size) //size[Number]创建一个buffer对象，并为这个对象分配一个大小
  //当我们为一个Buffer对象分配空间大小以后，其长度固定，不能更改

  new Buffer(array)

  new Buffer(string,[encoding]) 
  * 
  */

//  var bf=new Buffer(5);//这里是定义这个buffer的长度是5个
//  console.log(bf);
//  bf[6]=3;
//  console.log(bf);//这里的打印出来的还是五个


var bf=new Buffer([1,2,3]);
console.log(bf);//<Buffer 01 02 03>
bf[10]=10;
console.log(bf)//<Buffer 01 02 03>


























