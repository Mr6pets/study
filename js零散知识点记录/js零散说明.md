 <!-- js零散文件说明 -->
 #### 深拷贝和浅拷贝
 ~~~js
 let markA=["0","1","2"]
 let markB=markA;
 markA[0]="1";
console.log(markA,markB);
//这里 a修改后 b也随之修改了；说明这是浅拷贝
 ~~~

##### 基本数据类型有哪些，number，string，boolean，null，undefined，symbol（ES6） 未来的ES10 BigInt(任意精度整数)

let a=1,b=a;虽然b不受a影响，但这也算不上深拷贝，因为深拷贝本身只针对较为复杂的object类型数据。

~~~js
  // 对象的克隆
  function deepClone(obj){
    let objClone = Array.isArray(obj) ? [] : {};//若是为 Array，则返回 true，否则为 false
    if(obj && typeof obj==="object"){
      for(key in obj){
        if(obj.hasOwnProperty(key)){//这个方法会查找一个对象是否有某个属性，但是不会去查找它的原型链。
          //判断ojb子元素是否为对象，如果是，递归复制
          if(obj[key] && typeof obj[key]==="object"){
            objClone[key]=deepClone(obj[key])
          }else{//子元素不是对象，简单的克隆赋值
            objClone[key]=obj[key]
          }
        }
      }
    }
    return objClone;
  }
  let a=[1,2,3,4],
  b=deepClone(a);
  a[0]=2
  console.log(a,b);
~~~
~~~js
let a=[1,2,3,4],
    b=a.slice();
a[0]=2;
console.log(a,b);
console.log(a,b);//[2,2,3,4],[1,2,3,4];

// 如果a改变
let a=[0,1,[2,3],4],
        b=a.slice();
a[0]=1;
a[2][0]=1;
console.log(a,b);
// 结果是相同的  所以slice 无法深拷贝2级
// 拷贝的不彻底啊，b对象的一级属性确实不受影响了，但是二级属性还是没能拷贝成功，仍然脱离不了a的控制，说明slice根本不是真正的深拷贝。


//通过JSON.stringify(); JSON.parse()来实现拷贝
function deepClone(obj){
  let _obj=JSON.stringify(obj),
    objClone=JSON.parse(_obj);
    return objClone;
};
let a=[1,[2,3],4],
  b=deepClone(a);
  a[0]=1;
  a[1][0]=99;
  console.log(a,b)

~~~

~~~js
// 可以借用JQ的extend方法
$.extend( [deep ], target, object1 [, objectN ] )
// deep表示是否深拷贝，为true为深拷贝，为false，则为浅拷贝
// target Object类型 目标对象，其他对象的成员属性将被附加到该对象上。
// object1  objectN可选。 Object类型 第一个以及第N个被合并的对象。 

let a=[0,1,[2,3],4],
b=$.extend(true,[],a);
a[0]=1;
a[2][0]=1;
console.log(a,b);
~~~
<!-- 参考来源：https://www.cnblogs.com/echolun/p/7889848.html -->
<!-- https://zhuanlan.zhihu.com/p/26282765 -->
<!-- https://www.zhihu.com/question/23031215 -->



















































