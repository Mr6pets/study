#### HTML5详解

> 1初识HTML5

对于HTML5的一些说明，没有例子

> 2HTML5新特征

- 拖放事件（这里都是Chrome的环境下）
  - -dragstart拖拽前触发
  - -drag，拖拽前，拖拽结束之间 连续触发
  - -dragend 拖拽结束触发
  
- 目标元素事件：事件对象为目标元素
  - -dragenter 进入目标元素触发，相当于mouseover
  - -dragover 进入目标，离开目标之间 连续触发
  - -dragleave 离开目标元素触发，相当于mouseout
  - -drop,在目标元素上释放鼠标触发
  
- 拖放事件
  - 事件的执行顺序：drop不触发的时候
    - dragstart>drag>dragenter>dragover>dragleave>dragend
  - 事件的执行顺序：drop触发的时候（dragover的时候阻止默认事件）
    - dragstart>drag>dragenter>dargover>drop>dragend
  - 不能释放光标和能释放光标不一样

- 解决火狐下的问题

  - 必须设置dataTransfer对象的setData方法才可以拖拽除图片外的其他标签

- dataTransfer对象

  - setData：设置数据key和value（必须是字符串）

  - getData:获取数据，根据key值，获取对应的value

  - =================================================

  - effectAllowed（拖拽到目标对象的时候会在拖拽鼠标的下面显示自己设置的link样式）

    - effectAllowed:设置光标样式（none copy copyLink，copyMove，link，linkMove，move，all， 和uninitialized）

  - setDragImage（拖拽元素为自己设定的样式进行拖住 比如这里就是用了odiv的样式来进行拖拽 并且拖拽的位置左边是 0 0）

    三个参数：指定的元素 坐标X 坐标Y
    
   - files
  
      - 获取外部拖拽的文件，返回一个filelist列表
      - fileList下有个type属性 返回文件的类型
  
   - FileReader(读取文件信息)（这是一个对象 使用的时候需要创建对象）
  
      - readAsDataURL
         - 参数为要读取的文件对象，将文件读取设置为dataUrl
      - onload
         - 当读取文件成功完成的时候触发此事件
         - this.result 来获取读取文件的数据，如果是 图片，将返回base64格式的图片数据
      - exp
         - 拖拽删除列表
         - 拖拽购物车
         - 上传图片预览功能


> 3跨文档消息通信

- postMessage对象
  - 接收消息的窗口对象。postMessage（）
  - 参数1：发送的数据，参数二：接收的域（带协议）
  - 交互方式
    - iframe:父页面：contentWindow，子页面：window.top
    - 窗口页：父页面：window.open,子页面:window.opener
  - 接收事件
    - message
    - ev.origin:发送数据源的域
    - ev.data:发送的数据
- XMLHttpRequest level 2
  - XMLHttpRequest改进版本
    - 请求页面于数据页面必须属于不同的域
    - 服务器要设置响应头信息
    - origin值展现
    - IE：xDomainRequest
    - 新的事件：onload等
    - http://www.w3.org/TR/XMLHttpRequest2
    - http://msdn.microsoft.com/en-us/library/cc288060(VS.85).aspx
  - 进度事件
    - upload.onprogress:上传
    - FormData对象(upload上传的时候使用的)
    - ev.total(已发送总量) ev.loaded(待发送的总量)
    - onprogress 下载
- websocket
  - 互联网协议
    - http://www.ruanyifeng.com/blog/2012/05/internet_protocol_suite_part_i.html
    - TCP/IP协议
      - 定义了电子设备如何连入因特网，以及数据在他们之间传输的标准（如何传输）
      - 传输数据（协议）类型：email www ftp
    - HTTP协议
      - 浏览器和万维网服务器之间互相通信的规则
  - HTTP协议的特点
    - 功能很强大
    - 采用请求 响应模式 单项通信
    - 短链接 响应完成连接就断开
  - 实时web交互
    - 股票 聊天室 网游等应用
    - 如何实现实时应用 服务器推送
- 什么是websocket？
  - 基于TCP的双向的 全双工的数据连接
    - 双向的：客户端 服务器端
    - 全双工：数据的发送与接收 两者同步进行
  - 建立socket应用
    - 服务器必须支持websocket
    - -nodejs的简介
      - Ryan Dahl基于GoogleV8引擎创建的一套用来编写高性能网络服务器的JavaScript工具包
    - nodejs：用js写的服务器应用



> 6canvas

对于HTML5中的canvas画布的一些介绍，和制作一些小例子

