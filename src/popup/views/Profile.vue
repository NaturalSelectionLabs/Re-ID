<template>
    <popup-container>
        <back-button viewType="popup" />
        <div class="w-55 h-80 pt-3 grid grid-rows-editProfile gap-3">
            <Avatar ref="avatar" size="sm" :url="avatarUrl" />
            <Input
                inputType="text"
                viewType="popup"
                :minlength="1"
                :maxLength="128"
                placeholderText="Name"
                v-model="username"
            />
            <Input
                inputType="textArea"
                viewType="popup"
                :minlength="1"
                :maxLength="128"
                placeholderText="Bio"
                v-model="bio"
            />
            <key-container :keyText="address" :isPrivate="false" viewType="popup" :isCollapse="false" />
            <Button class="absolute left-5 bottom-7" buttonStyle="primary" buttonSize="lg" @click="updateProfile">{{
                saveButtonText
            }}</Button>
        </div>
    </popup-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PopupContainer from '@/components/PopupContainer.vue';
import BackButton from '@/components/BackButton.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import KeyContainer from '@/components/KeyContainer.vue';
import Avatar from '@/components/Avatar.vue';
import RSS3, { IRSS3 } from '@/common/rss3';

@Options({
    components: { PopupContainer, BackButton, Button, Input, KeyContainer, Avatar },
})
export default class Profile extends Vue {
    avatarUrl: any = 'https://gateway.pinata.cloud/ipfs/QmewKetg1XR4wX68w52FMzGiA2vK77LgqK7j86Lh5Lzpsp';
    username: string = '';
    bio: string = '';
    address: string = ''; // public address
    rss3?: IRSS3 | null;
    saveButtonText = 'Save';

    async mounted() {
        this.rss3 = await RSS3.get();
        if (this.rss3) {
            const profile = await this.rss3.profile.get();
            this.avatarUrl = profile?.avatar?.[0] || this.avatarUrl;
            this.username = profile?.name || '';
            this.bio = profile?.bio || '';
            this.address = this.rss3.persona.id;
        }
    }

    async updateProfile() {
        if (this.rss3) {
            this.saveButtonText = 'Saving...';
            const avatarUrl = await (<any>this.$refs.avatar).upload();
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
    //     async resetProfile() {
    //     const profile = await this.rss3.profile.get();
    //     this.avatar = profile?.avatar[0] || '';
    //     this.username = profile?.name || '';
    //     this.bio = profile?.bio || '';
    // }
}
</script>

<style scoped lang="postcss">
@layer components {
    .avatar-edit {
        @apply h-14 w-14 rounded object-cover;
    }
}
</style>
