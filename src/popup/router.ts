import * as VueRouter from 'vue-router';

import Index from './views/Index.vue';

import Onboarding from './views/Onboarding.vue';
import Pending from './views/Pending.vue';

import Login from './views/Login.vue';

import Home from './views/Home.vue';
import Invite from './views/Invite.vue';
import Profile from './views/Profile.vue';
import Account from './views/Account.vue';

const routes = [
    {
        path: '/',
        component: Index,
    },

    {
        path: '/onboarding',
        component: Onboarding,
    },
    {
        path: '/pending',
        component: Pending,
    },
    {
        path: '/login',
        component: Login,
    },

    {
        path: '/home',
        component: Home,
    },
    {
        path: '/invite',
        component: Invite,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/account',
        component: Account,
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

export default router;
