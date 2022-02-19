关于Vue的一些认知：

1.Vue的生命周期

beforeCreate：实例初始化之后；数据观测和事件配置之前调用，组件的选项对象还没有创建，el挂载和data都没有初始化，无法访问方法和数据。

created：实例创建完成之后调用；已经完成了数据观测，属性方法的运算，watch/event 事件回调，data数据初始化已经完成，el挂载还没有开始。

beforeMount：挂载之前调用；el初始化已经完成，vdom已经完成data和模板的结合生成html，但是还没有挂载到html页面里。

mounted：挂载完成之后调用；模板中的html渲染到html页面里。

beforeUpdate：数据更新之前调用；发生在vdom重新渲染和打补丁之前，可以进一步更改状态，不会触发重新渲染。

updated：数据更新，dom渲染之后调用；要避免在这里更改状态，防止更新导致的无线循环。

beforeDestory：实例销毁之前调用；还可以获取到this，一般用于清除定时器和监听事件等。

destoryed：实例销毁之后调用；所有监听事件被清除，子实例被销毁。

activated：（keep-alive的生命周期）页面第一次进入的时候，钩子触发的顺序是created->mounted->activated
deactivated：（keep-alive的生命周期）页面退出的时候会触发deactivated，当再次前进或者后退的时候只触发activated

2.Vue2.x 双向绑定原理

vue 是通过 数据劫持 结合 发布者-订阅者 来实现双向绑定；数据劫持通过Object.defineProperty（）方法的get和set方法来重新定义，set是设置属性值触发的函数，get是读取属性值触发的函数；

底层实现：

1、监听器observer，object.defineProperty 的set方法监听所有属性，有变动通知订阅者，在这里还需要创建一个消息订阅器Dep来收集订阅者
2、订阅者watcher，接收变化通知执行相应函数，更新view
3、解析器compile，扫描解析每一个节点的指令，初始化订阅器





