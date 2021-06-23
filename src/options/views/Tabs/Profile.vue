<template>
    <div class="profile">
        <div class="avatar">
            <Avatar ref="avatar" size="lg" :url="avatarUrl" />
        </div>
        <div class="username">
            <Input view-type="options" input-type="text" placeholderText="Name" v-model="username" />
        </div>
        <div class="bio">
            <Input view-type="options" input-type="text-area" placeholderText="Bio" v-model="bio" />
        </div>
        <div class="btn-save">
            <Button button-style="primary" button-size="xxl" @click="saveProfile">{{ saveButtonText }}</Button>
        </div>
        <div class="btn-discard">
            <Button button-style="secondary" button-size="xxl" @click="initialize"> Discard </Button>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import RSS3, { IRSS3 } from '@/common/rss3';
import { ThirdPartyAddress } from 'rss3/types/rss3';
import IconAdd from '@/components/icons/IconAdd.vue';
import Avatar from '@/components/Avatar.vue';

@Options({
    components: {
        Avatar,
        IconAdd,
        Button,
        Input,
    },
})
export default class TabsProfile extends Vue {
    avatarUrl: string = 'https://gateway.pinata.cloud/ipfs/QmewKetg1XR4wX68w52FMzGiA2vK77LgqK7j86Lh5Lzpsp';
    username: string = '';
    bio: string = '';
    rss3?: IRSS3;
    saveButtonText = 'Save';

    async mounted() {
        const rss3 = await RSS3.get();
        if (!rss3) {
            this.$router.push('/start');
        } else {
            this.rss3 = rss3;
            await this.initialize();
        }
    }

    async initialize() {
        const profile = await this.rss3?.profile.get();
        this.avatarUrl = profile?.avatar?.[0] || this.avatarUrl;
        console.log(profile);
        this.username = profile?.name || '';
        this.bio = profile?.bio || '';
    }

    async saveProfile() {
        if (this.rss3) {
            this.saveButtonText = 'Saving...';
            const avatarUrl = await (<any>this.$refs.avatar).upload();
            console.log(this.username, this.bio);
            const profile: {
                name: string;
                bio: string;
                avatar?: string[];
            } = {
                name: this.username,
                bio: this.bio,
            };
            if (avatarUrl) {
                profile.avatar = [avatarUrl];
            }
            await this.rss3.profile.patch(profile);
            await this.rss3.persona.sync();
            this.saveButtonText = 'Save';
        }
    }
}
</script>

<style lang="postcss" scoped>
@layer components {
    .profile {
        @apply mt-24;

        > div {
            @apply mt-8;
        }
    }
}
</style>
