// 假定有一个对象数组A，获取数组中的指定类型的对象放到B数组中去
    var products=[
        {name:"cucumber",type:"vegetables"},
        {name:"banana",type:"fruit"},
        {name:"celery",type:"vegetables"},
        {name:"orange",type:"fruit"}
    ]
    // es5
    // var filterProducts=[];
    // for(var i=0;i<products.length;i++){
    //     if(products[i].type==="fruit"){
    //         filterProducts.push(products[i])
    //     }
    // }
    // console.log(filterProducts);

    // es6
    var fruit=[];
    fruit= products.filter(function(item){
        return item.type === "vegetables"         
    })
    console.log(fruit);



// 假定有一个对象数组(A),过滤掉不满足以下条件掉对象
// 条件：蔬菜 数量大于0 价格小于10

var filterpro=[
    {name:"cucumber",type:"vegetables",quantity:0,price:1},
    {name:"banana",type:"fruit",quantity:10,price:16},
    {name:"celery",type:"vegetables",quantity:30,price:6},
    {name:"orange",type:"fruit",quantity:3,price:6}
]
var fil=[];
fil=filterpro.filter(function(item){
    return item.type==="vegetables" && item.quantity > 0 &&  item.price < 10;
})
console.log(fil);

// 假定有两个数组(A B)，根据A的ID值，过滤掉B数组不符合的数据

var post={id:4,title:"javascript"};
var comments=[
    {postId:4,content:"angular"},
    {postId:3,content:"vue"},
    {postId:2,content:"react"},
    {postId:4,content:"nodejs"},
]
function commentsForPost(post,comments){
    return comments.filter(function(item){
        return item.postId==post.id;
    });
}
console.log(commentsForPost(post,comments));


// 未解决

// const a=['a','b','c'];
// const b=[
//     {name:'a'},
//     {name:'e'},
//     {name:'d'},
//     {name:'b'},
//     {name:'c'},
// ]
// function abc(a,b){
//     return b.filter(function(item){
//         return item.name!==a.forEach(itema=>{
//               itema
//         });
//     })
// }
// console.log(abc(a,b));


