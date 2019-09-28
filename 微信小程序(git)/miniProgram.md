###	小程序学习

>	 1三阶段


   - 了解php mysql
- 掌握ajax 原生 jQuery 跨域
- 了解 H5 canvas
- 掌握 h5 存储
- 掌握：百度地图 echarts
- 掌握 移动端
- angular
- 小程序
>	2.1微信小程序


- 特点：无安装 
- 大小压缩版 不大于2M
- 如何使用
>	2小程序页面结构

- 1.目录结构

  - 小程序包含一个描述整体程序的app 和多个描述各自页面的page
    - app.js:小程序的逻辑
    - app.json:小程序的配置
    - app.wxss：小程序的公共样式表
  - pages：小程序页面
    - 页面：
      - .js:页面逻辑
      - .json:页面配置
      - .wxml:页面结构
      - .wxss:样式
  - 如果需要本地数据 那么就配置一个data文件夹和pages同级

- 2*.app.json配置

  - 页面文件的路径窗口表现 设置网络超时时间 设置多tab等

    ~~~javascript
    {
    	"pages":[//页面路径配置
            "pages/index/index",
            "pages/about/about"
        ],
        "window": {
        "navigationBarBackgroundColor": "#ffffff",
        "navigationBarTextStyle": "black",
        "navigationBarTitleText": "微信接口功能演示",
        "backgroundColor": "#eeeeee",
        "backgroundTextStyle": "light"
      }
    }
    ~~~

- 3*.app.js

  - 绑定生命周期回调函数 错误监听 和页面不存在监听函数

    ~~~javascript
    App({
      onLaunch (options) {
        // Do something initial when launch.
      },
      onShow (options) {
        // Do something when show.
      },
      onHide () {
        // Do something when hide.
      },
      onError (msg) {
        console.log(msg)
      },
      onPageNotFound(){
            
      },
      globalData: 'I am global data'
    })
    //生命周期：onLaunch onShow onHide
    //错误监听：onError
    //页面不存在监听：onPageNotFound
    //全局数据 data
    
    //生命周期函数：小程序页面从创建到关闭 自动创建的回调函数;
    
    //首次进入加载 只执行一次
    //onLaunch (options) {
        // Do something initial when launch.
//}
    
    //onShow 页面从后台切换到前端 可以执行多次
    //onHide:隐鲹
    ~~~
    
  
- 4*.wxss公共样式

  - 单位rpx:rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素
    750rpx=设计稿 750px  设计稿多大就写多少rpx

    设计稿140px 小程序写的时候就写140rpx
    
  - 导入css:

    @import "css/base.wxss";

- 5*.wxml

  - 页面结构：普通的写页面 就是 div+ul+span

    容器：swiper 滑块视图容器 实现轮播

    swiper-item滑块的每一项内容

    view 块元素

    基础：icon progress text相当于span

    表单： input button switch

    导航：navigatior 跳转 相当于a标签

    媒体：图片 <image src="图片路径"></image> 

  - 页面数据绑定

    wxml数据绑定 是当前页面对应的wx.js里面data数据

    {{}}表达式

    ex:if="{{true}}" 显示

    wx:else

    列表渲染：wx:for=""

    wx:for="{{数据名}}" wx:key='index'唯一性

    ​	item 每一项的内容

    ​	index 下标

    修改制定的变量名称

    ​	wx:for-item="name"

    ​	wx:for-index="id"

- 6*.js 当前页面逻辑

  ~~~javascript
  page({
      data:{
     	 	//页面数据
      },
      //生命周期函数
      
      //事件处理函数
      
  })
  ~~~

  事件处理：

  ​	事件的分类 事件分为冒泡事件和非冒泡事件：

  ​	冒泡事件：当一个组件上的事情被触发后，该事件会向父节点传递

  ​	非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递

  ~~~javascript
  touchstart：手指触摸动作开始
  touchmove:手指触摸后移动
  touchcancel:手指触摸动作被打断，如来电提醒，弹窗
  touchend:手指触摸动作结束
  tap:手指触摸后马上离开
  ~~~

  事件：

  ​	bind+事件名：点击事件 bindtap 冒泡事件

  catch+事件名：点击事件 catchtap 非冒泡事件

- 7.获取当前页面的data数据和修改data的数据

  获取 this.data.变量名

  修改

  ~~~javascript
  this.setData({
      变量名：value
  })
  ~~~

- 8.*.json当前页面的配置

  - 每一个小程序页面也可以使用同名 `.json` 文件来对本页面的窗口表现进行配置，页面中配置项会覆盖 `app.json` 的 `window` 中相同的配置项。

- 9*.wxss

  - 当前的页面的样式表 这时候配置的wxss 会覆盖app.wxss

- 10.navigator 路由

  - 功能：页面跳转
  - 语法：navigator
    - url:当前小程序内的跳转链接
    - open-type:跳转方式
      - navigate：保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 [wx.navigateBack](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html) 可以返回到原页面。小程序中页面栈最多十层。
      - redirect：关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
      - switchTab:跳转到tabBar页面 并关闭其他所有非tabBar页面
      - reLaunch:关闭所有页面 打开到应用内的某个页面
      - navigateBack:关闭当前页面 返回上一页面或者多级页面

  ​	

  