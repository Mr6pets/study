// pages/more/more.js
//导入存在data文件夹下的数据
var nows = require('../../data/nows.js');
var coming = require('../../data/coming.js');
var top250 = require('../../data/top250.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.val);
    //获取对应的数据 如果是热映 那就获取 热映的数据
    if(options.val=='reying'){
      //获取nows的数据 最后给到数据data--list
      this.setData({
        list:nows.now.subjects
      })
    } else if (options.val == 'jijiang'){
      this.setData({
        list: coming.coming.subjects
      })
    }else{
      this.setData({
        list: top250.top250.subjects
      })
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("我下拉了动作 更新数据")
    //1.刷新清空当前的数据
    //2.请求新的数据
    //3.把新的数据 赋值给data-list设置值

    //1.清空当前的数据
    this.setData({
      list:[]
    })
    //2.正常请求数据 模拟数据 用即将上映的数据
    var newslist=coming.coming.subjects;
    //3.把新的数据 添加到list中
    this.setData({
      list:newslist
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("我上拉 加载更多的数据");
    //操作那个页面要做判断

    //1.请求剩下的数据
    //2. 加载更多 需要老数据加新数据
    //虚拟数据 加载本页数据
    this.setData({
      list:this.data.list.concat(this.data.list)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})