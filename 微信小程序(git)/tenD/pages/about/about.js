// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"hello 你好",
    onShow:false,
    isShow:true,
    arr:["11","22","33"],
    num:[1,2,3,4,5,6,7,8,9],
    books:[
      {
        "name":"三国演义",
        "category":"文学",
        "desc":"一个军阀混战的年代作品"
      }, {
        "name": "水浒传",
        "category": "文学",
        "desc": "草寇英雄好汉"
      }, {
        "name": "西游记",
        "category": "文学",
        "desc": "妖魔鬼怪牛鬼蛇神"
      }, {
        "name": "红楼梦",
        "category": "文学",
        "desc": "一个封建王朝的缩影"
      }
    ]
  },
  //自定义函数
  change:function(){
    // console.log(this);//这里的this指向的是当前的page
    //改变data数据
    //this.setData(key,value);
    //this.setData({key:value});
    this.setData({
      isShow:!this.data.isShow
    },function(){
      console.log(this.data.isShow)
    })
  },
  demo: function (event){
    console.log(event);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面加载进来就执行
    console.log("页面加载");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 页面加载完成执行
    console.log("页面加载完成")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //切换tab的时候 onshow就会触发
    console.log("页面显示show");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("页面关闭 hide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //当前页面关闭掉 页面中有个按钮 跳转百度 当前页面没有按钮 监听 
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //下拉就执行函数
    console.log("监听用户下拉")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //一般用来加载更多
    console.log("页面上拉触底事件的处理函数");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    //
  }
})