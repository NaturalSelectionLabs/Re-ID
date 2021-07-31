<template>
    <PopupContainer>
        <div class="row-start-2 row-end-3 flex flex-col justify-start items-left gap-y-5">
            <p>
                <Logo width="55" height="55" class="inline" />
            </p>
            <p>
                <LogoTitle height="30" width="100" class="inline" />
            </p>
            <UserList view-type="popup">
                <SingleUser
                    v-for="(user, idx) in accountsShowList"
                    view-type="popup"
                    :user="user"
                    :key="idx"
                    @click="setUser(user.privateKey)"
                />
                <SingleUser view-type="popup" :user="newUser" @click="$router.push('/login')" />
            </UserList>
        </div>
    </PopupContainer>
</template>
<script lang="ts">
import PopupContainer from '@/components/PopupContainer.vue';
import Logo from '@/components/Logo.vue';
import LogoTitle from '@/components/LogoTitle.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import UserList from '@/components/UserList.vue';
import SingleUser from '@/components/SingleUser.vue';
import { Options, Vue } from 'vue-class-component';
import RSS3 from '@/common/rss3';
import { UserAccount } from '@/common/multi-accounts';
import MultiAccounts from '@/common/multi-accounts';

@Options({
    components: {
        PopupContainer,
        Logo,
        LogoTitle,
        Input,
        Button,
        SingleUser,
        UserList,
    },
})
export default class LoginBack extends Vue {
    accountsShowList: UserAccount[] = [];

    newUser: UserAccount = {
        avatar: 'https://gateway.pinata.cloud/ipfs/QmewKetg1XR4wX68w52FMzGiA2vK77LgqK7j86Lh5Lzpsp',
        name: 'Add new',
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
