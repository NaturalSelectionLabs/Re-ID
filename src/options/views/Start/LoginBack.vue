<template>
    <div class="accounts">
        <UserList view-type="options">
            <SingleUser
                v-for="(user, idx) in accountsShowList"
                view-type="options"
                :user="user"
                :key="idx"
                @click="setUser(user.privateKey)"
            />
            <SingleUser view-type="options" :user="newUser" @click="$router.push('/start/login')" />
        </UserList>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import UserList from '@/components/UserList.vue';
import SingleUser from '@/components/SingleUser.vue';
import RSS3 from '@/common/rss3';
import { UserAccount } from '@/common/multi-accounts';
import MultiAccounts from '@/common/multi-accounts';

@Options({
    components: { SingleUser, UserList },
})
export default class LoginBack extends Vue {
    accountsShowList: UserAccount[] = [];

    newUser: UserAccount = {
        avatar: 'https://gateway.pinata.cloud/ipfs/QmewKetg1XR4wX68w52FMzGiA2vK77LgqK7j86Lh5Lzpsp',
        name: 'Add new account',
        address: '0x0',
    };

    async mounted() {
        const accountsShowList = await MultiAccounts.get();
        if (accountsShowList) {
            this.accountsShowList = accountsShowList;
        }
    }

    async setUser(privateKey: string) {
        // Update user info
        const rss3 = await RSS3.set(privateKey);
        const profile = await rss3.profile.get();

        await MultiAccounts.set({
            avatar:
                profile?.avatar?.[0] ||
                'https://gateway.pinata.cloud/ipfs/QmewKetg1XR4wX68w52FMzGiA2vK77LgqK7j86Lh5Lzpsp',
            name: profile?.name || '',
            address: rss3.persona.id,
            privateKey: rss3.persona.privateKey,
        });

        await this.$router.push('/');
    }
}
</script>
