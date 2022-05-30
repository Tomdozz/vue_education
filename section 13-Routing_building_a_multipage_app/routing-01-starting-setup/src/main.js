import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router'
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMember from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue'



import App from './App.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/teams' //domain/teams
        },
        {
            name: 'teams',
            path: '/teams',
            components: {default: TeamsList, footer: TeamsFooter}, //domain/teams
            children: [
                {
                    name: 'team-member',
                    path: ':teamId',
                    component: TeamMember, //domain/teams
                    props: true
                },
            ]
        },
        {
            path: '/users',
            components: {default: UsersList, footer: UsersFooter}, //domain/teams
            beforeEnter: (to, from, next) => {
                //guard on specific route
                console.log(to);
                console.log(from);
                next();
            }
        },
        {
            path: '/:notFound(.*)', redirect: '/teams' // or add a component
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        console.log(savedPosition)
        return {left: 0, top: 0};
    }
});

router.beforeEach(function (to, from, next) {
    //check guard and decide wher to go next, in next we can send a object that describes where to go to
    next();    
});
/*router.afterEach((to, from) => {
    // to and from are both route objects.
    can be used for something like statistics
})*/

const app = createApp(App)
app.use(router);

app.mount('#app');
