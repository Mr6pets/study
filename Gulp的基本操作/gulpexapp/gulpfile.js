//处理任务
const gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
//常用的方法
// gulp.task--定义任务
// gulp.src--找到需要执行的文件
// gulp.dest--执行任务的去处
// gulp.watch--观察文件的变化

//定义任务
// gulp.task("message", async function () {
//   await console.log("gulp is running");
// });
//执行任务 gulp.message



//拷贝文件
gulp.task("copyHtml", async function () {
  await gulp.src("src/*.html")
    .pipe(gulp.dest("dist"));
})

//图片压缩
gulp.task("imageMin", async function () {
  await gulp.src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"))
});

//js文件压缩
// gulp.task("minify", async function () {
//   await gulp.src("src/js/*.js")
//     .pipe(uglify())
//     .pipe(gulp.dest("dist/js"))
// });

//sass文件转化为css
gulp.task("sass", async function () {
  await gulp.src("src/sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));

})


//定义默认的任务
// gulp.task("default", function () {
//   return console.log("这是一个默认的任务");
//   done();
// });

//多任务执行
// gulp.task("default", ["copyHtml", "imageMin", "sass", "minify"]);

//合并
gulp.task("concatScript", async function () {
  await gulp.src("src/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
})

//监听文件是否发生变化
gulp.task("watch", async function () {
  await gulp.watch("src/js/*.js", ['concatScript']);
  await gulp.watch("src/images/*", ['imageMin']);
  await gulp.watch("src/sass/*.scss", ['sass']);
  await gulp.watch("src/*.html", ['copyHtml']);
});


