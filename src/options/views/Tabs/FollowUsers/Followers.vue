<template>
    <div class="follow">
        <UserList view-type="options">
            <SingleUser
                v-for="(user, idx) in followersShowList"
                view-type="options"
                :user="user"
                :key="idx"
                @click="viewUser(user.address)"
            />
        </UserList>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import UserList from '@/components/UserList.vue';
import SingleUser from '@/components/SingleUser.vue';
import RSS3 from '@/common/rss3';
@Options({
    components: {
        SingleUser,
        UserList,
    },
})
export default class Followers extends Vue {
    followersShowList: {
        avatar: string;
        name: string;
        address: string;
    }[] = [];

    async mounted() {
        const rss3 = await RSS3.get();
        const followersList = await rss3?.backlinks.get(rss3.persona.id, 'following');
        if (rss3 && followersList) {
            for (const fo of followersList) {
                const profile = await rss3.profile.get(fo);
                this.followersShowList.push({
                    avatar:
                        profile.avatar?.[0] ||
                        'https://gateway.pinata.cloud/ipfs/QmewKetg1XR4wX68w52FMzGiA2vK77LgqK7j86Lh5Lzpsp',
                    name: profile.name || '',
                    address: fo,
                });
            }
        }
    }

    viewUser(addr: string) {
        window.open('https://rss3scan.io/address/' + addr, '_blank');
    }
}
</script>
