const app = Vue.createApp({
    data() {
        return {
            currentStyle: '',
            inputBackgroundColor: '',
            paragraphIsVisible: true,
            inlinestyle: ''
        }
    },
    computed: {
        paraClasses(){
            return{
                user1: this.currentStyle === 'user1',
                user2: this.currentStyle === 'user2',
                visible: this.paragraphIsVisible,
                hidden: !this.paragraphIsVisible,
            }
        }
    },
    methods: {
        toggleHide(){
            this.paragraphIsVisible = !this.paragraphIsVisible;
        }
    }
})

app.mount('#assignment')