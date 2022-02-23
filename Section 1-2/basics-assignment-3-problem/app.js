const app = Vue.createApp({
    data() {
      return {
        counter: 0,
      };
    },
    computed: {
        result () {
            if(this.counter < 37) {
                return 'Not there yet'
            } else if (this.counter > 37){
                return 'Too much!'
            }
        }
    },
    watch: {
        result (){  
            setTimeout(function(){ 
               this.counter = 0
            }, 5000);

        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        }
    }
  });
  
  app.mount('#assignment');
  