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
    avatarUrl = <any>'';
    username = <any>'';
    bio = <any>'';
    address = <any>''; // public address

    async mounted() {
        const rss3 = await RSS3.get();
        if (rss3) {
            const profile = await rss3.profile.get();
            this.avatarUrl = profile.avatar;
            this.username = profile.name;
            this.bio = profile.bio;
            this.address = rss3.persona.id;
        }
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
        // const newProfile = await (await RSS3.get()).profile.patch({
        //     name: this.username,
        //     avatar: this.avatarUrl,
        //     bio: this.bio,
        // });
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
