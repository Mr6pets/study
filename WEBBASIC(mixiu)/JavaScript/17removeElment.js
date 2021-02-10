//repalce
//创建新的元素
const newHeading = document.createElement("h2");
// 添加id
newHeading.id = 'new';
//添加内容
newHeading.appendChild(document.createTextNode("新的"));


//找到要替换的标签
const oldHeading = document.getElementById('old');


//获取父级
const cardAction = document.querySelector('.card');

//替换
cardAction.replaceChild(newHeading, oldHeading)



//删除元素
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//第一种删除方式
lis[0].remove();

//第二种删除方式
list.removeChild(lis[4]);

//classes attr
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];


//a类
let val;
val = link.className;
val = link.classList;
val = link.classList[1];
link.classList.add('test');
link.classList.remove('test');

//属性
val.link.getAttribute('href')
val = link.setAttribute('href', "www.alvisliu.com")
link.setAttribute('title', "alvisliu");
val = link.hasAttribute('title');
link.removeAttribute('title');
