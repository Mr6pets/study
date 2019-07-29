/*
vue中提供了一组方法，对数组进行操作的时候 会触发视图更新
push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。

pop() 方法用于删除并返回数组的最后一个元素。

shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。

unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。

splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。

sort() 方法用于对数组的元素进行排序。

reverse() 方法用于颠倒数组中元素的顺序。
替换数组

filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

concat() 方法用于连接两个或多个数组。

slice() 方法可从已有的数组中返回选定的元素。
其他

split() 方法用于把一个字符串分割成字符串数组。

directives{}指令
钩子函数：update被绑定元素所在的模板更新时候调用
钩子函数中的参数
    el：指令所绑定的元素，可以用来直接操作DOM
    binding：一个对象
        value：指定的绑定值

*/
let list=[
    {
        title:"吃饭睡觉打豆豆",
        ischecked:false
    },
    {
        title:"学习课堂",
        ischecked:true
    }
]
let vm=new Vue({
    el:".main",
    data:{
        list:list,
        todo:"",
        edtorTodos:'',//记录正在编辑的数据
        beforeTitle:''//记录正在编辑数据的title
    },
    computed:{
        nocheckeLength(){
            return this.list.filter(function(item){
                return !item.ischecked
            }).length
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