Vue.createApp({
    data() {
        return {
            name: 'Tom Andersson',
            age: 26,
            imageLink: 'https://www.iphonebutiken.se/files/simple-close-reflection-600.jpg',
            inputValue: 'poop'
        }
    },
    methods: {
        randomNumber() {
            return Math.random();
        }
    },
}).mount('#assignment')