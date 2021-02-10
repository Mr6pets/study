var app = new Vue({
  el: '#app',
  data: {
    age: 30,
    x: 0,
    y: 0
  },
  methods: {
    add(inc) {
      this.age += inc;
    },
    sub(dec) {
      this.age -= dec;
    },
    updataXY(e) {
      this.x = e.clientX;
      this.y = e.clientY
    },
    handle() {
      console.log("111");
    }
  }
})