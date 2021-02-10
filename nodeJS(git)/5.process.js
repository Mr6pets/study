/*
 * global 
 * process对象是一个全局对象 可以在任何地方都能访问到他 通过这个对象提供的属性和方法，使我们可以对当前运行的程序的进程进行访问和控制
 * arg
 *  -Array 一组包含命令行参数的参数
 * execPath
 *  -开启当前进程的绝对路径
 * env
 *  -返回用户的环境信息
 * 
 * process对象
 * .version返回node的版本信息
 * .versions返回node以及node依赖包版本信息
 * .pid当前进程的pid
 * .title当前进程的显示名称（Getter/Setter）
 * .arch返回当前CPU处理器架构arm/ia32/x64
 * .platform返回当前操作系统平台
 * .cwd()返回当前进程的工作目录
 * .chdir(directory)改变当前进程的工作目录
 * .memoryUsage()返回node进程的内存使用情况 单位是byte
 * .exit(code)退出
 * kill(pid)向进程发送信息
 */

// console.log(process);
// console.log(global.process);

console.log(process.argv);
















