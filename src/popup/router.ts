import * as VueRouter from 'vue-router';

import Index from './views/Index.vue';

import Onboarding from './views/Onboarding.vue';
import Pending from './views/Pending.vue';

import Login from './views/Login.vue';
import LoginBack from './views/LoginBack.vue';

import Home from './views/Home.vue';
import Invite from './views/Invite.vue';
import Profile from './views/Profile.vue';
import Account from './views/Account.vue';

import Followers from '@/popup/views/FollowUsers/Followers.vue';
import Following from '@/popup/views/FollowUsers/Following.vue';

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
        path: '/login-back',
        component: LoginBack,
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

    {
        path: '/followers',
        component: Followers,
    },
    {
        path: '/following',
        component: Following,
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

export default router;
