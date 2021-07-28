<template>
    <PopupContainer>
        <BackButton view-type="popup" />
        <div class="follow">
            <UserList>
                <SingleUser
                    v-for="(user, idx) in followersShowList"
                    view-type="popup"
                    :user="user"
                    :key="idx"
                    @click="viewUser(user.address)"
                />
            </UserList>
        </div>
    </PopupContainer>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import UserList from '@/components/UserList.vue';
import SingleUser from '@/components/SingleUser.vue';
import RSS3 from '@/common/rss3';
import PopupContainer from '@/components/PopupContainer.vue';
import BackButton from '@/components/BackButton.vue';
@Options({
    components: {
        BackButton,
        PopupContainer,
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
        const followingList = await (await rss3?.links.get(rss3.persona.id, 'following'))?.list;
        if (rss3 && followingList) {
            for (const fo of followingList) {
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
