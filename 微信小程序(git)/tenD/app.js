//app.js
//1.注册App
App({
  //在小程序运行期间，之后运行一次
  //程序销毁之后（过了一段时间没有运行 或者手动删除小程序 再次添加运行），再次启动就会执行
  onLaunch: function () {
    console.log("小程序启动了");
  },
  //每次后台切换回来执行
  onShow(){
    console.log("切换到小程序运行了");
  },
  //每次切换到后台就会执行
  onHide(){
    console.log("小程序被隐藏到后台运行了");
  },
  globalData: {
    userInfo: null
  }
})