###	关于Vue-plugin-pages的说明

> 这里对基于页面系统的路由的一个说明：https://juejin.cn/post/7016585379235135496

本文大部分配置都写在vite.config.ts->defineConfig->plugins->Pages里面

~~~js
// 指定需要生成路由的文件夹

	Pages({
	  pagesDir: [
	   { dir: 'src/pages', baseRoute: '' },
	   // src/features/pages文件夹下会生成/features/filename这样的路由
	   { dir: 'src/features/pages', baseRoute: 'features' },
	   // 会识别fruits下多个分类下pages的文件
	   { dir: 'src/fruits/**/pages', baseRoute: 'fruits' },
	  ],
	})
~~~

~~~js 
// 指定需要生成路由的文件

Pages({
  // 识别带有vue和md后缀的文件为路由（md文件需要有插件支持）
  extensions: ['vue', 'md'],
}

~~~

~~~js
// 加载方式

类型:  'sync' | 'async' |  (stirng)=> 'sync' : 'async'
可以直接设定全局的路由加载方式，也可以通过设置syncIndex配置项来转换为同步加载
也可以通过传入一个方法，通过返回 sync 和 async 来确定加载方式



Pages({
  importMode: 'async',
  // 只要包含fruits的路由，就会变为异步懒加载
  // importMode(path) {
  //   return path.includes('fruits') ? 'async' : 'sync'
  // },
})

~~~


