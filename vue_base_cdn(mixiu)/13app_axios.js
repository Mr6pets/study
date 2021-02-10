//实例化
new Vue({
  el: "#app",
  data() {
    return {
      todos: [],
      todo: {
        title: "",
        completed: false
      }

    }
  },
  methods: {
    onSubmit() {

      // post请求 fetch
      //--------------------------------------------------------
      // fetch("http://jsonplaceholder.typicode.com/todos", {
      //   method: "POST",
      //   body: JSON.stringify(this.todo),
      //   headers: {
      //     "Content-type": "application/json"
      //   }
      // }).then(res => {
      //   return res.json()
      // }).then(todo => {
      //   // console.log(todo);
      //   this.todos.unshift(todo);
      // })

      //post请求 axios
      //----------------------------------------------
      axios.post("http://jsonplaceholder.typicode.com/todos", this.todo)
        .then(res => {
          console.log(res.data);
          this.todo.unshift(res.data);
        })

    }
  },
  mounted() {//钩子函数 一开始就执行
    //get请求 fetch
    //-------------------------------------------------------
    // const todos = fetch("http://jsonplaceholder.typicode.com/todos").then(res => {
    //   // console.log(res);
    //   return res.json();
    // }).then((todos) => {
    //   console.log(todos);
    //   this.todos = todos;
    // })

    //getq请求 axios
    //-------------------------------------------------
    axios.get("http://jsonplaceholder.typicode.com/todos")
      .then(res => {
        this.todos = res.data;
      })
  }
})





