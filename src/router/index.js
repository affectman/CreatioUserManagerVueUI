import VueRouter from 'vue-router'
import Home from '../components/Home.vue';
import CreateUser from '../components/CreateUser'
import Users from "../components/Users";

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/createUser',
            name: 'createUser',
            component: CreateUser
        },
        {
            path: '/users',
            name: 'users',
            component: Users
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: () => import('../components/Detail.vue')
        },
        {
            path: '/weather',
            name: 'weather',
            component: () => import('../components/Weather')
        },
    ],
    mode:'history'
});