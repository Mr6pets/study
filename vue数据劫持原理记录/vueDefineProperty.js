/** vue 底层原理的数据劫持*/
/**
 * 1.实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。
*2.实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。
*3.实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。
*/

function defineReactive(data,key,val) {
  observe(val)//遍历所有的子属性
  var dep = new Dep(); 
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      if (Dep.target) {
        dep.addSub(Dep.target)//添加订阅者
      };
      return val;
    },
    set: function (newVal) {
      if (val==newVal) {
        return
      }
      val = newVal;
      console.log('属性' + key + '已经被监听了,现在的值为："' + newVal.tostring() + '"');
      dep.notify(); // 如果数据变化，通知所有订阅者
    }
  });
}
Dep.target = null;
/**
 * 关于调用observe的说明:
 * data为var library = {book1: {name: ''},book2: ''};
*/

// 数据监听器
function observe(data) {
  if (!data || typeof data !== 'object') {
    return
  }
  /**
   * Object.keys(data)==>['book1','book2']
   * Object.keys(data).forEach(key=>{console.log(key)});//key==>book1 book2
   * defineReactive(data, key, data[key]);//data:代表传入的对象 key为book1或者book2; data[key]为book:{name:''} book2:'';
  */
  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key]);
  });
}
//消息订阅器Dep(构造函数)
function Dep() {
  this.subs = [];
}
Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub);
  },
  notify: function () {
    this.subs.forEach(function (sub) {
      sub.update()
    });
  }
}

// 订阅者Watcher(构造函数)
function Watcher(vm,exp,cb) {
  this.cb = cb;
  this.vm = vm;
  this.exp = exp;
  this.value = this.get();  // 将自己添加到订阅器的操作
}
Watcher.prototype = {
  update: function() {
    this.run();
  },
  run: function () {
    var value = this.vm.data[this.exp];
    var oldVal = this.value;
    if (value != oldVal) {
      this.value = value;
      this.cb.call(this.vm, value, oldVal);
    }
  },
  get: function() {
    Dep.target = this;//缓存自己
    var value = this.vm.data[this.exp];// 强制执行监听器里的get函数
    Dep.target = null;// 释放自己
    return value;
  }

}


//解析器Compile来做解析和绑定工作





var library = {
  book1: {
    name: ''
  },
  book2: ''
};
observe(library);
console.log(library.book1.name,"iii")











































