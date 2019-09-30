###	仿网易新闻

- 1.导航scroll-view 可滚动视图区域

​	注意：scroll-view里面的内容元素 不能浮动 浮动后scroll-view失效



- 1.1导航选中状态切换：

  - 1.给当前的元素 添加class样式 class通过三元运算符的方式 是够具有样式js里面设置一个默认选中的 变量 selected=“yaowen”

  - class="{{selected=='yaowen'?'active':''}}"

    

  - 给每个导航元素 设置一个属性 绑定当前的元素值 data-变量="beijing/yaowen......."

  - data-val='beijing'

  - 点击导航元素 bindtap="change"添加事件 点击获取data-变量属性 赋值给data数据

  - 修改selected=当前的点击元素值实现选中切换
  
- 1.2轮播

  - swiper 轮播容器 默认大小 300*150
  - swiper-item 轮播的每一项

- 1.3内容区域

  - 页面模板
  - 模板传递数据 遍历数据
  - 点击当前的新闻信息  跳转到响应的详情页面
    - 点击事件 跳转页面