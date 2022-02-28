 <!-- js零散文件说明 -->
 #### 深拷贝和浅拷贝
 ~~~js
 let markA=["0","1","2"],
 markB=markA;
 markA[0]="1";
console.log(markA,markB);
//这里 a修改后 b也随之修改了；说明这是浅拷贝
 ~~~

##### 基本数据类型有哪些，number，string，boolean，null，undefined，symbol（ES6） 未来的ES10 BigInt(任意精度整数)

let a=1,b=a;虽然b不受a影响，但这也算不上深拷贝，因为深拷贝本身只针对较为复杂的object类型数据。



















































