// A开发
define(function(require,exports,module){
    var oInput = document.querySelector('#input1');
    var oDiv1 = document.querySelector('#div1');
    var oDiv2 = document.querySelector('#div2');
    var oDiv3 = document.querySelector('#div3');
    
    require('./3.Bfn.js').drag(oDiv3);

    oInput.onclick=function(){
        oDiv1.style.display="block";
        require('./3.Cfn.js').scale(oDiv1,oDiv2)
    }
})