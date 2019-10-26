###	bootstrap

> 容器

- container-fluid
- container
  - 固定
  - 1170
  - 970
  - 750
  - auto
> 栅格系统

- 分12列

  - row
  - col

- 阈值

  - 1200>=
  - 992>=
  - 768>=
  - 768
  
- col-lg, col-md, col-sm, col-xs

- 列偏移

  - col-lg-offset-4:偏移4个网格

- 列排序

  - col-[*]-push-
  - col-[*]-pull-

> 响应式工具

- 概念：
  
  - 针对不同的设备展示或隐藏页面内容
  
- 可见类
  - visible-*
    - lg md sm xs
    - block inline inline-block
  - hidden-*
  
- 打印类
  
  - -visible-print-* hidden-print
  
- 天猫侧边栏

> 字体tubiao

- Glyphicons
  - 好处
    - 减少请求
    - 容易控制样式
    - 例子：淘宝
  - 用法
    - font-face
    - 字体路径
  - 自制图标
    - http://jingyan.baidu.com/article/f79b7cb346cf499145023e78.html	

> 预定义风格

- primary:( 首选项)

- success:（成功）

- info:（一般信息）

- warning:（警告）

- danger:（危险）

- 实例：登录框

> 按钮

- 基类

  - b't'n

- 样式

  - btn-default(默认)
  - btn-link(链接)

- 大小

  - btn-*[lg sm xs]

- 状态

  - active
  - disabled

- 种类

  - a input button

- 块级

  - ban-block

- 按钮组

  - btn-group
  - btn-group-justified
  - ban-group-vertical

- 实例：GitHub按钮

> 	下拉菜单

- 属性
  - data-*
  - aria-*
  - role
- open
- dropdown-menu-right
- dropdown-header
- divider
- 例子：运动且带图标的菜单