###	Gulp

工具：

- gulp是一个开源的JavaScript的开源的自动化工具
- gulp应用于前后端代码管理的一种工具
- gulp是基于nodejs和npm应用的构建工具

- gulp的主要应用于处理耗时以及重复的任务
- gulp可以解决上百种的任务 例如压缩代码 合并代码等

~~~js
1.压缩代码
2.合并代码
3.压缩图片
4.Sass转换
~~~



原理：

- gulp是基于nodejs中的数据流
- gulp主要使用pipe事件输入输出
- 插件的独立使用

gulp的优势：

- gulp是基于代码进行配置
- gulp的可读性更高
- gulp是基于数据流，所以可以操作pipe事件

~~~
全局安装gulp：
sudo npm install -g gulp
~~~

本地文件夹安装

~~~js
npm install gulp --save-dev
~~~

本地文件夹建立名字是gulpfile.js的文件夹（必须是这个名字）



~~~js
//拷贝文件
gulp.task("copyHtml", function () {
  gulp.src("src/*.html")
    .pipe(gulp.dest("dist"));
})

~~~



~~~js
图片压缩：
npm install gulp-imagemin --save-dev
gulp-imagemin


//图片压缩
gulp.task("imageMin", function () {
  gulp.src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/iamges"))
})
~~~

~~~js
js压缩
gulp-uglify
npm install gulp-uglify --save-dev

//js压缩
gulp.task("minify", function () {
  gulp.src("src/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
})
~~~



~~~js
//sass文件转化为css
gulp-sass
npm install gulp-sass --save-dev

//sass文件转化为css
gulp.task("sass", function () {
  gulp.src("src/sass/*.scss")
    .pipe(sass().on("error", sass.logError))
  .pipe(gulp.dest("dist/css"))
  
})

~~~



~~~js
执行多任务
//多任务执行
// gulp.task("default", ["copyHtml", "imageMin", "sass", "minify"]);
~~~



~~~js
//合并：
npm install gulp-concat --save-dev

gulp.task("concatScript", async function () {
  await gulp.src("src/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
})
~~~



~~~js
//监听文件是否发生变化
gulp.task("watch", function () {
  gulp.watch("src/js/*.js", ['concatScript']);
  gulp.watch("src/images/*", ['imageMin']);
  gulp.watch("src/sass/*.scss", ['sass']);
  gulp.watch("src/*.html", ['copyHtml']);
})
~~~



