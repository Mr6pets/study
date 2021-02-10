//index.js
//轮播数据拿取
var swiper=require('../../data/swiperData.js');
//引入新闻内容数据
var newslist = require('../../data/newslist.js');

Page({
  data: {
    //设置一个属性 赋值一个初始状态 是否选中 classs是否添加 三元判断
    //点击事件 点击谁 谁的值赋值给selected
    selected:'yaowen',
    swiperData:swiper.swiperData,
    newslist: newslist.sData

  },
  //函数--实现导航选中的切换
  change:function(event){
    // console.log(event.currentTarget.dataset.val);
    //接收点击元素身上的绑定的属性值 data-val=""
    var value = event.currentTarget.dataset.val;
    // 设置selected 让点击的元素被选中
    this.setData({
      selected: value
    })
  },
  onLoad:function(){
    // console.log(swiper);
    console.log(newslist);
  },
  //如果是后台请求接口 用微信自带的方式 wx.require({})
})
