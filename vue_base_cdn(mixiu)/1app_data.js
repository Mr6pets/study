var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    website: "wwww.baidu.com",
    websiteTag: '<a href="https://www.baidu.com">',
    name: "alvis"
  },
  methods: {
    greet: function () {
      return `good ning` + this.message;
    }
  },
})