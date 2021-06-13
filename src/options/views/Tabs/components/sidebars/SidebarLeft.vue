<template>
    <div class="sidebar-left">
        <Profile
            :avatar="avatar"
            :username="username"
            :address="address"
            followers="93"
            following="193"
            balance="150"
        />
        <NavMenu />
        <Footer />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Profile from '@/options/views/Tabs/components/leftside/Profile.vue';
import NavMenu from '@/options/views/Tabs/components/leftside/NavMenu.vue';
import Footer from '@/options/views/Tabs/components/leftside/Footer.vue';
import { ThirdPartyAddress } from 'rss3/types/rss3';
import RSS3 from '@/common/rss3';

@Options({
    components: {
        Profile,
        NavMenu,
        Footer,
    },
})
export default class SidebarLeft extends Vue {
    avatar: String = '';
    username: String = '';
    address: String = '';

    async mounted() {
        const rss3 = await RSS3.get();
        this.address = `${rss3.persona.id.substring(0, 3)}***${rss3.persona.id.substring(rss3.persona.id.length - 3)}`;
        const profile = await rss3.profile.get();
        if (typeof profile !== 'undefined') {
            if (typeof profile.avatar !== 'undefined' && typeof profile.avatar[0] !== 'undefined') {
                this.avatar = profile.avatar[0];
            }
            if (typeof profile.name !== 'undefined') {
                this.username = profile.name;
            }
        }
    }
}
</script>

<style lang="postcss" scoped>
@layer components {
    .sidebar-left {
        @apply w-62 fixed left-18 top-18;
    }
}
</style>
