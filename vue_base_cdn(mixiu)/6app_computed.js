//实例化
new Vue({
  el: "#app",
  data() {
    return {
      a: 0,
      b: 0,
      age: 27
    }
  },
  methods: {
    // addToA() {
    //   console.log("11")
    //   return this.a + this.age;
    // },
    // addToB() {
    //   console.log("22")
    //   return this.b + this.age
    // }
  },
  computed: {
    addToA() {
      console.log("11")
      return this.a + this.age;
    },
    addToB() {
      console.log("22")
      return this.b + this.age
    }
  },
})


