//同事B开发的功能
define(function(require,exports,module){
    //拖拽
    function drag(obj){
        var disX=0;
        var disY=0;
        obj.onmousedown=function(ev){
            var ev=ev || window.event;
            disX=ev.clientX-this.offsetLeft;
            disY=ev.clientY-this.offsetTop;
            document.onmousemove=function(ev){
                var ev=ev || window.event;
                var L=ev.clientX-disX;
                var T=ev.clientY-disY;
                //这里还是引入模块化的一个函数限制拖动的在窗口区域中 引入同事D 写的内容
                var L = require('./3.Dfn').range(L,document.documentElement.clientWidth-obj.offsetWidth,0);
                var T = require('./3.Dfn').range(T,document.documentElement.clientHeight-obj.offsetHeight,0)

                obj.style.left=L+'px';
                obj.style.top=T+'px';
            }
            document.onmouseup=function(){
                document.onmousemove=document.onmouseup=null;
            }
            //阻止标准模式下的默认事件
            return false
        }
    }
    //暴露出去
    exports.drag=drag;
})