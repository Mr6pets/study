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
                obj.style.left=ev.clientX-disX+'px';
                obj.style.top=ev.clientY-disY+'px';
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