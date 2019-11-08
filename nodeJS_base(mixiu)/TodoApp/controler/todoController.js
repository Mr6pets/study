// app.js文件 引入todoController.js作为一个模块
//todoController中就导出一个方法用一个app形参来接收传递过来的app对象
module.exports = function (app) {
  //获取数据
  app.get('/todo', function (req, res) {
    res.send("您所访问的地址是：" + req.url)
  });
  //传递数据
  app.post('/todo', function (req, res) {
    //coding.....
  });
  //删除数据
  app.delete('/todo', function (req, res) {
    //coding....
  })
}