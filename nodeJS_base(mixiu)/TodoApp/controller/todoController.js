//引入mongoose模块
var mongoose = require('mongoose');
//链接数据库
mongoose.connect('mongodb+srv://todo-app:test1234@cluster0-rzg8n.mongodb.net/todo-app?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("mongodb connecting")
  })
  .catch(err => console.log(err));
//创建一个图表；类似是存取进去是一个什么样的模板
var todoSchema = new mongoose.Schema({
  item: String
});
//向数据库中存储数据
// 第一个参数：具体的名字 第二个参数：就是具体的图表
var Todo = mongoose.model('Todo', todoSchema);
//存储一个{item: "hello world!"}的对象 中有一个回调函数 里面会有返回的错误信息和数据
//如果有错误抛出 没有就打印值
// Todo({ item: "hello world!" }).save(function (err, data) {
//   if (err) throw err;
//   console.log("have been saved")
// })

//引入bodyparser
var bodyParser = require('body-parser');
//对数据进行解析
var urlencodeParser = bodyParser.urlencoded({ extended: false })

// 假数据
// var data = [
//   { item: "welcome alvis's page" },
//   { item: "everythings is ok" },
//   { item: "future is well" },
// ]
// app.js文件 引入todoController.js作为一个模块
//todoController中就导出一个方法用一个app形参来接收传递过来的app对象
module.exports = function (app) {
  //获取数据_前端请求数据
  app.get('/todo', function (req, res) {
    //请求localhost/3000/todo，查询数据库
    Todo.find({}, function (err, data) {
      if (err) throw err;
      //render中是找到那个文件，第二参数就是传递的数据
      res.render('todo', { todos: data });
    })
  });
  //传递数据_前端想后台传送数据
  app.post('/todo', urlencodeParser, function (req, res) {
    // request下有一个body就是我们传递过来的数据了
    // console.log(req.body);
    Todo(req.body).save(function (err, data) {
      if (err) throw err;
      res.json(data);
    });
    // data.push(req.body);
  });
  //删除数据
  app.delete('/todo/:item', function (req, res) {
    //通过路由参数拿到传递过来的值，来在我存储的data中过滤掉
    // console.log(req.params.item);
    Todo.find({ item: req.params.item }).remove(function (err, data) {
      if (err) throw err;
      res.json(data);
    })
    // data = data.filter((item) => {
    //   //如果传递过来的item的值和数据中item的值不相等的话 就返回回去
    //   //匹配上过滤掉 没有匹配上就是返回去
    //   return req.params.item !== item.item
    // })
    // //将当前数据返回给前台
    // res.json(data);
  })
}
