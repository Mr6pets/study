let val
var list = document.querySelectorAll(ul.li);
val = list;
//获取子节点
val = list.childNodes;//看到的和看不到的都是可以获取的节点
val = lsit.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// 1---Element
// 2 - Attibute
// 3 - Text Node
// 8 - Comment 注释
// 9 - Document Self
// 10 - Doctype

//获取子元素节点
val = list.children;
val = lsit.children[1];
lsit.children[1].textContent = 'hello';

// 子元素的子元素
val = list.children[3].children[0].className

//获取第一个元素节点
val = list.firstChild;
val = list.firstElmentChild;

//获取最后一个元素节点
val = list.lastChild;
val = list.lastElementChild;

//计算节点个数
val = list.childElementCount;

//获取父亲节点
parentNode;
parentElement;

//获取兄弟节点
val = list.nextSibling;
val = list.nextElementSibling

//获取上一个兄弟节点
val = list.previousSibling;
val = list.previousElementSibling


