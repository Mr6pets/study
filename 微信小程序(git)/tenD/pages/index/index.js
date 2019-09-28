//index.js
//通过getApp获取应用实例
const app = getApp()
let arr1=[
  "matt","mjoy","pet","lucy"
];
let arr2=[
  { id: Math.random(), name:'matt'},
  { id: Math.random(), name:'mjoy'},
  { id: Math.random(), name:'pet'},
  { id: Math.random(), name:'lucy'},
];
Page({
  data: {
    name:"matt",
    people:{
      n1:1,
      n2:33
    },
    names:arr2
  },
  //tab之间的切换 不会让页面重新加载 也不会卸载 只会隐藏；
  //在进行navigatorto 会跳转到目标页面 目标页面会卸载 跳转之前的页面会被隐藏；
  //回退(navigator),目标页面会show（不是加载） 回退之前的页面会被卸载（unload);
  //页面加载的时候执行
  onLoad: function () {
    console.log("index 页 load")
  },
  //页面渲染完成之后 只会执行一次
  onReady(){
    console.log("index 页 ready")
  },
  //页面显示执行
  onShow(){
    console.log("index 页 show")
  },
  //页面隐藏就会执行
  onHide(){
    console.log("index 页 hide")
  },
  //页面卸载的时候执行
  onUnload(){
    console.log("index 页 unload")
  }
})
