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
      fetch("http://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(this.todo),
        headers: {
          "Content-type": "application/json"
        }
      }).then(res => {
        return res.json()
      }).then(todo => {
        // console.log(todo);
        this.todos.unshift(todo);
      })
    }
  },
  mounted() {//钩子函数 一开始就执行
    // http://jsonplaceholder.typicode.com/todos
    const todos = fetch("http://jsonplaceholder.typicode.com/todos").then(res => {
      // console.log(res);
      return res.json();
    })
      .then((todos) => {
        console.log(todos);
        this.todos = todos;
      })
  },
})


