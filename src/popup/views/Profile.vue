<template>
    <popup-container>
        <back-button viewType="popup" />
        <div class="w-55 h-80 pt-3 grid grid-rows-editProfile gap-3">
            <Avatar size="sm" :url="avatar" />
            <Input
                inputType="text"
                :originalValue="userID"
                viewType="popup"
                minlength="1"
                maxLength="128"
                v-model="newUsername"
            />
            <Input
                inputType="textArea"
                :originalValue="bio"
                viewType="popup"
                minlength="1"
                maxLength="128"
                v-model="newBio"
            />
            <key-container :keyText="address" :isPrivate="false" viewType="popup" :isCollapse="false" />
            <Button class="absolute left-5 bottom-7" buttonStyle="primary" buttonSize="lg" @click="updateProfile"
                >Save</Button
            >
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
    avatar: any;
    username: string = '';
    bio: string = '';
    address: string = ''; // public address
    rss3?: IRSS3 | null;

    async mounted() {
        this.rss3 = await RSS3.get();
        if (this.rss3) {
            const profile = await this.rss3.profile.get();
            this.avatar = profile?.avatar?.[0] || '';
            this.username = profile?.name || '';
            this.bio = profile?.bio || '';
            this.address = this.rss3.persona.id;
        }
    }

    updateAvatar() {
        let input = this.$refs.file as HTMLInputElement;
        let imagefile = input.files;
        if (imagefile && imagefile[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.avatar = e.target?.result;
            };
            reader.readAsDataURL(imagefile[0]);
            this.$emit('input', imagefile[0]);
        }
    }

    async updateProfile() {
        if (this.rss3) {
            console.log(this.username, this.bio);
            await this.rss3.profile.patch({
                name: this.username,
                avatar: this.avatar,
                bio: this.bio,
            });
            await this.rss3.persona.sync();
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
