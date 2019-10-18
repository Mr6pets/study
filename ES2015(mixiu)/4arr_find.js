// 假定有一个数组对象A 找到符合条件的对象

var users=[
    {name:'bluk'},
    {name:'alvis'},
    {name:'bill'}
];
// es5
var user;
for(var i=0;i<users.length;i++){
    if(users[i].name==="alvis"){
        user=users[i];
        break;//找到后停止循环，节约资源
    }
}
console.log(user);

// es6
user=users.find(function(item){
    return item.name=="alvis"
})
console.log(user);

// 假定有一个对象数组A,根据指定对象的条件找到数组中符合条件的对象

var posts=[
    {id:1,title:"node.js"},
    {id:2,title:"react.js"}
]
var comments={postId:1,content:"hello world"};
function postsToComments(posts,comments){
    return posts.find(function(item){
       return item.id==comments.postId
    })
}
console.log(postsToComments(posts,comments))



