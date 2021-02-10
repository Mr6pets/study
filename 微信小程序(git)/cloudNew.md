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
    - 点击事件 跳转页面 bindtap='';
    - 触发点击 跳转详情页 wx.navigateTo();
  
- 1.4页面交互

  - 收藏 弹框

    - wx.showLoading()显示loading

      - 显示loading 提示框

      - 需要主动调用wx.hideLoading才能关闭

        ~~~javascript
        wx.showLoading({
          title: '加载中',
        })
        
        setTimeout(function () {
          wx.hideLoading()//隐藏loading
        }, 2000)
        ~~~
    
  - 信息提示框

    ~~~JavaScript
    wx.showToast({
    	title:'提示文字信息'，
    	icon:'success',
    	duration:2000//默认1500自动隐藏
    })
    ~~~

- 1.5数据存储

  - 小程序数据存储 本地存储 永久的

    - 两类：一类是后缀带sync 同步存储
    - 一类是 不带sync异步存储

  - 语法

    - 设置存储

      ~~~javascript
      wx.setStorageSync(key, value);
      
      wx.setStorage({
        key:"key",
        data:"value"
      })
      ~~~

    - 获取

      ~~~javascript
      wx.getStorageSync(key);
      
      wx.getStorage({
        key: 'key',
        success (res) {
          console.log(res.data)
        }
      })
      ~~~

    - 删除

      ~~~javascript
      wx.removeStorageSync(key);
      
      wx.removeStorage({
        key: 'key',
        success (res) {
          console.log(res)
        }
      })
      
      ~~~

    - 清空

      ~~~javascript
      wx.clearStorageSync()
      
      wx.clearStorage()
      
      ~~~

- 星星的收藏存储

  - 1.进入页面先判断是否有存储 获取本地存储

  - 存储的格式是

    ```JavaScript
    count={
    condeId:true//页面收藏
    codeID：false//页面没有收藏
    }
    ```

    获取本地内容：wx.getStorageSync('key');

  - 2.如果有存储 页面显示收藏  否则不收藏

  - 3.点击事件 点击星星进行收藏或者不收藏

    - 点击星星 判断当前页面是否有存储
      - 如果有，点击后变取消收藏 同时本地存储 的count的id对应的值变false
      - 如果没有 点击后收藏当前页面 同时本地设置 当前的页面id为true

  - 4.点击事件后 数据本地存储

    - wx.setStorageSync('count',JSON.stringfy(count));

    

  ​	

