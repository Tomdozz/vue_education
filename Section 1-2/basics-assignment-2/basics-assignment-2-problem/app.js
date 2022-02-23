const app = Vue.createApp({
    data() {
        return {
          data1: '',
          data2: '',
          confirmedData2: ''
        };
      },

    methods: {
        sendAlert(){
            alert("aletred");
        },
        setData1() {
            this.data1 = event.target.value; 
        },
        setData2() {
            this.data2 = event.target.value; 
        },
        setConfirmedData2() {
            this.confirmedData2 = this.data2; 
        }
    },
})
app.mount('#app')