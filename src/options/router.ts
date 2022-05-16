import * as VueRouter from 'vue-router';

import Index from './views/Index.vue';

import StartIndex from './views/Start/Index.vue';
import Start from './views/Start/Base.vue';
import StartNew from './views/Start/New.vue';
import StartLogin from './views/Start/Login.vue';
import StartLoginBack from './views/Start/LoginBack.vue';
import StartPrivateKey from './views/Start/PrivateKey.vue';
import StartSavePrivateKey from './views/Start/SavePrivateKey.vue';
import StartAddress from './views/Start/Address.vue';
import StartPending from './views/Start/Pending.vue';
import StartProfile from './views/Start/Profile.vue';
import StartCongrats from './views/Start/Congrats.vue';
import StartMigrate from './views/Start/Migrate.vue';

import TabsBase from './views/Tabs/Base.vue';
import TabsHome from './views/Tabs/Home.vue';
import TabsAdvancedBase from './views/Tabs/Advanced/Base.vue';
import TabsAdvancedView from './views/Tabs/Advanced/View.vue';
import TabsAdvancedDelete from './views/Tabs/Advanced/Delete.vue';
import TabsProfile from './views/Tabs/Profile.vue';
import TabsInvite from './views/Tabs/Invite.vue';
import TabsSettings from './views/Tabs/Settings.vue';
import TabsFollowers from './views/Tabs/FollowUsers/Followers.vue';
import TabsFollowing from './views/Tabs/FollowUsers/Following.vue';

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
                path: 'login-back',
                component: StartLoginBack,
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
            {
                path: 'migrate',
                component: StartMigrate,
            },
        ],
    },

    {
        path: '/',
        component: TabsBase,
        children: [
            {
                path: 'home',
                component: TabsHome,
            },
            {
                path: 'advanced',
                component: TabsAdvancedBase,
                children: [
                    {
                        path: '',
                        component: TabsAdvancedView,
                    },
                    {
                        path: 'delete',
                        component: TabsAdvancedDelete,
                    },
                ],
            },
            {
                path: 'profile',
                component: TabsProfile,
            },
            {
                path: 'invite',
                component: TabsInvite,
            },
            {
                path: 'settings',
                component: TabsSettings,
            },
            {
                path: 'followers',
                component: TabsFollowers,
            },
            {
                path: 'following',
                component: TabsFollowing,
            },
        ],
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

export default router;
