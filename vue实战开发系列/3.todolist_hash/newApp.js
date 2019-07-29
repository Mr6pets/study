/*
directives{}指令
钩子函数：update被绑定元素所在的模板更新时候调用
钩子函数中的参数
    el：指令所绑定的元素，可以用来直接操作DOM
    binding：一个对象
        value：指定的绑定值

*/
//存取localstorage中的数据
var store={
    save(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    fetch(key){
        return JSON.parse(localStorage.getItem(key)) || [] 
    }
}
// let list=[
//     {
//         title:"吃饭睡觉打豆豆",
//         ischecked:false
//     },
//     {
//         title:"学习课堂",
//         ischecked:true
//     }
// ]

var list=store.fetch("miaov-new-class");
//这里的计算属性进行list的过滤，这里的过滤有三种情况 all finished unfinished
var filter ={
    all:function (list){
        return list
    },
    finished:function (list){
        return list.filter(function(item){
            return item.ischecked;
        })
    },
    unfinished:function(list){
        return list.filter(function(item){
            return !item.ischecked;
        })
    }
}
let vm=new Vue({
    el:".main",
    data:{
        list:list,
        todo:"",
        edtorTodos:'',//记录正在编辑的数据
        beforeTitle:'',//记录正在编辑数据的title
        visibility:"all"//通过这个属性的变化对数据进行筛选
    },
    watch:{
        // list:function(){//监控list这个属性，当这个属性对应的值发生变化就会执行函数
        //     store.save("miaov-new-class",this.list)
        // }//这里的list监控只是浅监控 无法监控到list里面的值的变化 所以要用深监控
        list:{
            handler:function(){
                store.save("miaov-new-class",this.list);
            },
            deep:true
        }
    },
    computed:{
        nocheckeLength(){
            return this.list.filter(function(item){
                return !item.ischecked
            }).length
        },
        filteredList:function(){
            
            return filter[this.visibility] ? filter[this.visibility](list) : list;
        }
    },
    methods: {
        addTodo(){//添加任务
            //在list中添加一项任务
            this.list.push({
                title:this.todo,
                ischecked:false
            })
            this.todo=""
        },
        deleteTodo(todo){//删除任务
            var index=this.list.indexOf(todo);//这里是找到你传进来的那个对象参数的下标，这里就是list数组下的点击的那个对象的下标
            this.list.splice(index,1)//当前list这个数组中的对象 删除掉下标为传递进来的那个 并且只删除一个
        },
        edtorTodo(todo){//编辑任务
            //编辑任务的时候，记录下编辑这条任务的title 方便取消编辑的时候重新给之前的title
            this.beforeTitle=todo.title
            this.edtorTodos=todo;
        },
        edtorTodoed(todo){//编辑完成任务
            //失去焦点 做的事情就是清楚记录的edtorTodos的值
            this.edtorTodos='';
        },
        cancelTodo(todo){//取消编辑任务
            todo.title=this.beforeTitle;
            this.beforeTitle='';
            //让div显示出来 input显示出来
            this.edtorTodos='';
        }
    },
    directives: {
        "focus":{
            update(el,binding){
                // console.log(el);
                // console.log(binding)
              if(binding.value){
                el.focus();
              }  
            }
        }
    }

})
// 监控哈希值
function watchHashChange(){
    var hash=window.location.hash.slice(1);//拿到的hash去掉# slice
    // console.log(hash)
    //思想是当我hash值改变的时候，对实例进行一次筛选
    vm.visibility=hash;
}
watchHashChange();
window.addEventListener('hashchange',watchHashChange)




