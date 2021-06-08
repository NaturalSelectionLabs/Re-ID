import * as VueRouter from 'vue-router';

import Index from './pages/Index.vue';

import StartIndex from './pages/Start/Index.vue';
import Start from './pages/Start/Base.vue';
import StartNew from './pages/Start/New.vue';
import StartLogin from './pages/Start/Login.vue';
import StartPrivateKey from './pages/Start/PrivateKey.vue';
import StartSavePrivateKey from './pages/Start/SavePrivateKey.vue';
import StartAddress from './pages/Start/Address.vue';
import StartPending from './pages/Start/Pending.vue';
import StartProfile from './pages/Start/Profile.vue';
import StartCongrats from './pages/Start/Congrats.vue';

import Advanced from './pages/Advanced.vue';
import Home from './pages/Home.vue';
import Invite from './pages/Invite.vue';
import Profile from './pages/Profile.vue';
import Settings from './pages/Settings.vue';

const routes = [
    {
        path: '/',
        component: Index,
    },

    {
        path: '/start',
        component: StartIndex,
    },
    {
        path: '/start',
        component: Start,
        children: [
            {
                path: 'new',
                component: StartNew,
            },
            {
                path: 'login',
                component: StartLogin,
            },
            {
                path: 'privatekey',
                component: StartPrivateKey,
            },
            {
                path: 'saveprivatekey',
                component: StartSavePrivateKey,
            },
            {
                path: 'address',
                component: StartAddress,
            },
            {
                path: 'pending',
                component: StartPending,
            },
            {
                path: 'profile',
                component: StartProfile,
            },
            {
                path: 'congrats',
                component: StartCongrats,
            },
        ],
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
        path: '/profile',
        component: Profile,
    },
    {
        path: '/settings',
        component: Settings,
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

export default router;
