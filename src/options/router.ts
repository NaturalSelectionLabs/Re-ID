import * as VueRouter from 'vue-router';

import Entry from './pages/Entry.vue';
import About from './pages/About.vue';
import Address from './pages/Address.vue';
import Advanced from './pages/Advanced.vue';
import Home from './pages/Home.vue';
import Invite from './pages/Invite.vue';
import Login from './pages/Login.vue';
import Pending from './pages/Pending.vue';
import PrivateKey from './pages/PrivateKey.vue';
import Profile from './pages/Profile.vue';
import Settings from './pages/Settings.vue';
import Setup from './pages/Setup.vue';
import Start from './pages/Start.vue';

const routes = [
    {
        path: '/',
        component: Entry,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/address',
        component: Address,
    },
    {
        path: '/advanced',
        component: Advanced,
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
        path: '/login',
        component: Login,
    },
    {
        path: '/pending',
        component: Pending,
    },
    {
        path: '/privateKey',
        component: PrivateKey,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/settings',
        component: Settings,
    },
    {
        path: '/setup',
        component: Setup,
    },
    {
        path: '/start',
        component: Start,
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

export default router;
