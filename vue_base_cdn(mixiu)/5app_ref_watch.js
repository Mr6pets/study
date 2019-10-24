//实例化
new Vue({
  el: "#app",
  data() {
    return {
      name: 'alvis',
      age: 32
    }
  },
  methods: {
    getName() {
      // console.log(this.$refs);
      this.name = this.$refs.name.value;
    },
    getAge() {
      // console.log(this.$refs);
      this.age = this.$refs.age.value;
    }
  },
  watch: {//监听data中值的变化，持续监听 耗费性能
    name(val, oldval) {
      console.log(val, oldval);
    },
    age(val, oldval) {
      console.log(val, oldval);
    }
  }
})


