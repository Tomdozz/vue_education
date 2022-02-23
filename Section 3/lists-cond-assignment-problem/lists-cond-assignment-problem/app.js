const app = Vue.createApp({
    data() {
        return {
            todos: [],
            hidden: false,
            input: ''
        }
    },
    computed: {
        btnText(){
            return this.hidden ? 'Hide list':'Show List';
        }
    },
    methods: {
        toggleHide(){
            this.hidden = !this.hidden;
        },
        addTodo(){
            this.todos.push(this.input);
        }
        
    },
})
app.mount('#assignment')