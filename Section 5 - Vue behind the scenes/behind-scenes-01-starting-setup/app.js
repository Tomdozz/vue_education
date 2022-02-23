const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
     // this.message = this.currentUserInput;
    },
  },
  beforeCreate() {
    console.log('beforecreate()')
  },
  created() {
    console.log('creasted()')
  },
  beforeMount() {
    console.log('beforeMount()')
  },
  mounted() {
    console.log('mounted()')
  },
  beforeUpdate() {
    console.log('beforeUpdate()')
  },
  updated() {
    console.log('update()')
  },
  beforeUnmount() {
      console.log('beforeUnmount()')
  },
  unmounted() {
    console.log('unmounted()')

  },
});

app.mount("#app");
setTimeout(function (){
  
app.unmount();

}, 3000)
const app2 = Vue.createApp({
  template: `
  <p>{{ favoriteFood }}</p>
  `,
  data() {
    return {
      favoriteFood: "Pizzas",
    };
  },
});

app2.mount("#app2");

// ...
