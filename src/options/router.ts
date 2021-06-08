import * as VueRouter from 'vue-router';

import Index from './views/Index.vue';

import StartIndex from './views/Start/Index.vue';
import Start from './views/Start/Base.vue';
import StartNew from './views/Start/New.vue';
import StartLogin from './views/Start/Login.vue';
import StartPrivateKey from './views/Start/PrivateKey.vue';
import StartSavePrivateKey from './views/Start/SavePrivateKey.vue';
import StartAddress from './views/Start/Address.vue';
import StartPending from './views/Start/Pending.vue';
import StartProfile from './views/Start/Profile.vue';
import StartCongrats from './views/Start/Congrats.vue';

import Advanced from './views/Advanced.vue';
import Home from './views/Home.vue';
import Invite from './views/Invite.vue';
import Profile from './views/Profile.vue';
import Settings from './views/Settings.vue';

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
