<template>
    <div class="sidebar-left">
        <Profile
            :avatar="avatar"
            :username="username"
            :address="address"
            :followers-count="followersCount"
            :following-count="followingCount"
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
import RSS3 from '@/common/rss3';

@Options({
    components: {
        Profile,
        NavMenu,
        Footer,
    },
})
export default class SidebarLeft extends Vue {
    avatar: String = 'https://gateway.pinata.cloud/ipfs/QmewKetg1XR4wX68w52FMzGiA2vK77LgqK7j86Lh5Lzpsp';
    username: String = '';
    address: String = '';
    followersCount: Number = -1;
    followingCount: Number = -1;

    async mounted() {
        await this.initProfile();
        document.addEventListener('profileUpdate', this.initProfile);
    }

    async initProfile() {
        const rss3 = await RSS3.get();
        this.address = rss3?.persona.id || '';
        const profile = await rss3?.profile.get();
        if (typeof profile !== 'undefined') {
            if (typeof profile.avatar?.[0] !== 'undefined') {
                this.avatar = profile.avatar[0];
            }
            if (typeof profile.name !== 'undefined') {
                this.username = profile.name;
            }
        }
        if (rss3) {
            const followersList = await rss3.backlinks.get(rss3.persona.id, 'following');
            this.followersCount = followersList?.length || 0;
            const followingList = (await rss3.links.get(rss3.persona.id, 'following'))?.list;
            this.followingCount = followingList?.length || 0;
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
