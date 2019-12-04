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
  mode: "development",
  //出口文件：有且只能有一个
  output: {
    // 文件名
    filename: "[name]-bundle.js",
    //路径
    path: path.resolve(__dirname, "../dist")，
    //index.html 引入script的时候src的地址前面加/ 如果是publicPathw为/js那么 引入就要用/js夹js文件名
    publicPath: "/"
  }
}
~~~

借助的webpack.dev.js打包

~~~js
webpack --config=config/webpack.dev.js
~~~

这样打包就成功了！！！

同时本地安装下

~~~js
npm install webpack webpack-cli webpack-dev-server
~~~

这个时候可以通启动

~~~js
webpack-dev-server --config=config/webpack.dev.js
~~~

实现热更新

webpack.dev.js内容

~~~js
const path = require("path");
module.exports = {
  // 入口文件：有并且可以有多个
  entry: {
    //单个入口文件
    main: "./src/main.js"
    //多个入口文件
    // main: ["./src/main.js", "./src/index.js"]
  },
  //打包环境
  mode: "development",
  //出口文件：有且只能有一个
  output: {
    // 文件名
    filename: "[name]-bundle.js",
    //路径
    path: path.resolve(__dirname, "../dist"),
    //index.html 引入script的时候src的地址前面加/ 如果是publicPathw为/js那么 引入就要用/js夹js文件名
    publicPath: "/"
  },
  //本地服务器
  devServer: {
    //默认的目录就是进入dist启动里面的内容
    contentBase: "dist"
  }
}
~~~

基本的webpack.dev.js的基本配置

> ​	##	加载相应的加载器

加载CSS，需要相应的加载器

~~~
npm install style-loader css-loader
~~~

这个要在webpack.dev.js中加入配置

~~~js
const path = require("path");
module.exports = {
  // 入口文件：有并且可以有多个
  entry: {
    //单个入口文件
    main: "./src/main.js"
    //多个入口文件
    // main: ["./src/main.js", "./src/index.js"]
  },
  //打包环境
  mode: "development",
  //出口文件：有且只能有一个
  output: {
    // 文件名
    filename: "[name]-bundle.js",
    //路径
    path: path.resolve(__dirname, "../dist"),
    //index.html 引入script的时候src的地址前面加/ 如果是publicPathw为/js那么 引入就要用/js夹js文件名
    publicPath: "/"
  },
  //本地服务器
  devServer: {
    //默认的目录就是进入dist启动里面的内容
    contentBase: "dist",
    //报错也可以显示在页面上
    overlay: true
  },
  //webpack4 通过module加载对应的加载器
  module: {
    rules: [
      //css加载器
      {
        test: /\.css$/,
        use: [
          {
            //将当前的css写入当前的HTML中
            loader: "style-loader"
          },
          {
            //将样式放到main-bundle.js中去
            loader: "css-loader"
          }
        ]
      }
    ]
  }
}
~~~



每次启动都用

~~~js
webpack-dev-server --config=config/webpack.dev.js
~~~

太长了

将配置加载在packge.json中

~~~json
{
  "name": "webpack-course",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    //通过npm start 启动
    "start": "webpack-dev-server --config=config/webpack.dev.js",
    //通过npm build打包
    "build": "webpack --config=config/webpack.dev.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "css-loader": "^3.2.1",
    "style-loader": "^1.0.1",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.9.0"
  }
}

~~~

> ​	加载html加载器

~~~
npm install html-loader extract-loader file-loader
~~~

