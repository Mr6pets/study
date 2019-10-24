// 定义全局对象 可以实现模板中 
let data = {
  name: "alvis",
  phoneNumber: 1886144202
}
//创建全球组件
Vue.component("Greeting", {
  //html模板 //这里的变量调用 和HTML中一样{{}}，不是${}! 这里的魔板也只能有一个跟标签
  template: `
  <p>
  这是全局组件，可以在任何实例中使用,也可用从全局中获取data值 获取的姓名是{{name}},手机号是{{phoneNumber}}
  <button @click="changename">改名</button>
  </p>`,
  //属性
  data() {
    return data
  },
  //方法
  methods: {
    changename() {
      this.name = "alvispets"
    }
  },
})
//实例化
const one = new Vue({
  el: "#app-one"
});

const two = new Vue({
  el: "#app-two"
})



