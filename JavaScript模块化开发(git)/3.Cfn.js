//同事C开发变大变小
define(function(require,exports,module){
    function scale(obj1,obj2){
        var downX=0;
        var downY=0;
        var downW=0;
        var downH=0;
        obj2.onmousedown=function(ev){
            var ev=ev||window.event;
            downX=ev.clientX;
            downY=ev.clientY;
            downW=obj1.offsetWidth;
            downH=obj1.offsetHeight;
            document.onmousemove=function(ev){
                var ev=ev||window.event;
                var W=ev.clientX-downY+downW;
                var H=ev.clientY-downY+downH
                //现在也要限制变大变小的限制区域为可视区域 同样也是可以引入同事D 的限制范围的函数
                // var W=require('./3.Dfn.js').range(W,document.documentElement.clientWidth,0);
                // var H=require('./3.Dfn.js').range(H,document.documentElement.clientHeight,0);
                var W=require('./3.Dfn.js').range(W,500,100);
                var H=require('./3.Dfn.js').range(H,500,100);
                obj1.style.width= W+'px';
                obj1.style.height=H+'px';
            }
            document.onmouseup=function(){
                document.onmousemove=document.onmouseup=null;
            }
            return false;
        }
    }
    exports.scale=scale;
})