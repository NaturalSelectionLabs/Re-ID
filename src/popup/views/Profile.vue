<template>
    <popup-container>
        <back-button viewType="popup" />
        <div class="w-55 h-80 pt-3 grid grid-rows-editProfile gap-3">
            <div class="cursor-pointer" @click="$refs.file.click()">
                <input ref="file" type="file" hidden @input="updateAvatar" />
                <img class="avatar-edit" :src="avatarUrl" />
                <icon-add class="absolute z-20 left-10 top-20.5" />
            </div>

            <Input
                inputType="text"
                :originalValue="userID"
                viewType="popup"
                minlength="1"
                maxLength="128"
                v-model="username"
            />
            <Input
                inputType="textArea"
                :originalValue="bio"
                viewType="popup"
                minlength="1"
                maxLength="128"
                v-model="bio"
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
import IconAdd from '@/components/icons/IconAdd.vue';
import RSS3 from '@/common/rss3';

@Options({
    components: { PopupContainer, BackButton, Button, Input, KeyContainer, IconAdd },
})
export default class Profile extends Vue {
    profile = { name: '', avatar: '', bio: '' };
    avatarUrl = <string | ArrayBuffer | null>'';
    username = '';
    bio = '';
    address = ''; // public address

    async mounted() {
        this.profile = (await RSS3.get()).profile.get();
        this.avatarUrl = this.profile.avatar;
        this.username = this.profile.name;
        this.bio = this.profile.bio;
        this.address = '0x47e18d6c386898b424025cd9db446f779ef24ad33a26c499c87bb3d93u896yhl';
    }

    updateAvatar() {
        let input = this.$refs.file as HTMLInputElement;
        let imagefile = input.files;
        if (imagefile && imagefile[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                if (e.target && e.target.result) this.avatarUrl = e.target.result;
            };
            reader.readAsDataURL(imagefile[0]);
            this.$emit('input', imagefile[0]);
        }
    }

    async updateProfile() {
        (await RSS3.get()).profile.patch({
            name: this.username,
            avatar: this.avatarUrl,
            bio: this.bio,
        });
    }
}
</script>

<style scoped lang="postcss">
@layer components {
    .avatar-edit {
        @apply h-14 w-14 rounded object-cover;
    }
}
</style>
