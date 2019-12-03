## webpack4使用说明

全局安转webpack需要的模块

~~~js
Windows端：npm install webpack webpack-cli webpack-dev-server -g

Mac端：sudo npm install webpack webpack-cli webpack-dev-server -g
~~~

文件夹目录结构

<img src="/Users/liuan/Documents/111.png" alt="111" style="zoom:100%;" />

开发环境打包：

~~~js
webpack --mode=development
~~~

生产环境打包：

~~~js
webpack --mode=production
~~~

![2222](/Users/liuan/Documents/2222.png)

加载图片 css 插件等需要在config文件夹下创建一个webpack.dev.js文件



基本的webpack.dev.js文件

~~~js
const path = require("path")
module.exports = {
  // 入口文件：有并且可以有多个
  entry: {
    //单个入口文件
    main: "./src/main.js"
    //多个入口文件
    // main: ["./src/main.js", "./src/index.js"]
  },
  //打包环境
  node: "development",
  //出口文件：有且只能有一个
  output: {
    // 文件名
    filename: "[name]-bundle.js",
    //路径
    path: path.resolve(__dirname, "../dist")
  }
}
~~~

借助的webpack.dev.js打包

~~~js
webpack --config=config/webpack.dev.js
~~~

