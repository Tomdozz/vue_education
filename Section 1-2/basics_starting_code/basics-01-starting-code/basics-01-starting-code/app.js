const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: '<h2>Poop</h2>',
            vueLink: 'http://tomandersson.se'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber <0.5){
                return this.courseGoalA;
            } else{
                return this.courseGoalB
            }
        }
    },

});

app.mount('#user-goal');