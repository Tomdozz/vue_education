const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      //fullname: '',
      lastName: ''
    };
  },
  computed: {
    fullname() {
      if (this.name === ''){
        return '';
      }
      return this.name + ' '  + this.lastName;
    }
  },
  watch: {
   /* name(value) {
      if(value === ''){
        this.fullname = '';
      } else {
        this.fullname = value + ' ' + 'Andersson';
      }
    }*/
  },
  methods: {
    outputFullName(){
      if (this.name === ''){
        return '';
      }
      return this.name + ' '  + 'Andersson';
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
  }
});

app.mount('#events');
