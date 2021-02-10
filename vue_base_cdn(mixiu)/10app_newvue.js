//实例化
const one = new Vue({
  el: "#app-one",
  data() {
    return {
      title: "11"
    }
  },
  methods: {

  },
  computed: {
    greet() {
      return "aaaaaaaaaa"
    }
  }
});

const two = new Vue({
  el: "#app-two",
  data() {
    return {
      title: "22"
    }
  },
  methods: {
    changeapponetitle() {
      one.title = "z这是one的title"
    }
  },
  computed: {
    greet() {
      return "bbbbbbbb"
    }
  }
})

two.title = "这是APPtwo 的title"


