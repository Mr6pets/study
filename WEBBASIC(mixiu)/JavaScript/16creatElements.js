//创建元素

const li = document.createElement('li');
//添加类
li.className = "collection-item";

//添加id
li.id = "new";
//添加自定义属性
li.setAttribute('title', "new title")

//添加文本节点
li.appendChild(document.createTextNode('文本节点'))

//创建a标签
const link = document.createElement('a');
link.className = "delete-item";

//插入i标签
link.innerHTML = "<i class='fa fa-remove'></i>"


//将link放到li中
li.appendChild(link);
//将li放到ul中
document.querySelector('ul.collection').appendChild(li);