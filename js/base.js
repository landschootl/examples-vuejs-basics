new Vue({
  el:'#app',
  components: {
    // MonComposant
  },
  data: {
    message: 'Pictime'
  },
  methods: {
    changeMessage() {
      this.message = 'les gens';
    }
  },
  watch: {
    message() {
      console.log('mon message a changer');
    }
  },
  computed: {
    fullMessage() {
      return `Salut ${this.message}`;
    }
  },
  template: `
        <div>
          <p>{{fullMessage}}</p>
<!--          <button @click="changeMessage()">changer le message</button>-->
        </div>
      `

});
