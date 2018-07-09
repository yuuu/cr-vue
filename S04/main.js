var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    count: 0,
    list: ['りんご', 'バナナ', 'いちご'],
    show: false
  },
  methods: {
    handleClick: function(event) {
      alert(event.target)
    }
  }
})

