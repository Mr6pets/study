//实例化
new Vue({
  el: "#app",
  data() {
    return {
      changeColor_boolearn: false,
      changelength_boolearn: false
    }
  },
  methods: {

  },
  computed: {
    comepare() {
      return {
        changeColor: this.changeColor_boolearn,
        changelength: this.changelength_boolearn
      }
    }
  },
})


