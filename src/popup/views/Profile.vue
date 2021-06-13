<template>
    <popup-container>
        <back-button viewType="popup" />
        <div class="w-55 h-80 pt-3 grid grid-rows-editProfile gap-3">
            <div class="cursor-pointer" @click="$refs.file.click()">
                <input ref="file" type="file" hidden />
                <img class="avatar-edit" :src="avatarUrl" />
                <icon-add class="absolute z-20 left-10 top-20.5" />
            </div>

            <Input inputType="text" :originalValue="userID" viewType="popup" minlength="1" maxLength="128" />
            <Input inputType="textArea" :originalValue="bio" viewType="popup" minlength="1" maxLength="128" />
            <key-container :keyText="address" :isPrivate="false" viewType="popup" :isCollapse="false" />
            <Button class="absolute left-5 bottom-7" buttonStyle="primary" buttonSize="lg" @click="invite()"
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

@Options({
    components: { PopupContainer, BackButton, Button, Input, KeyContainer, IconAdd },
})
export default class App extends Vue {
    avatarUrl = 'https://i.imgur.com/vTrCSys.jpg';
    userID = 'RSS3';
    address = '0x47e18d6c386898b424025cd9db446f779ef24ad33a26c499c87bb3d93u896yhl';
    bio = 'RSS3 is the dopest team yay';
    showingMenu = false;

    uploadImage() {}
}
</script>

<style scoped lang="postcss">
@layer components {
    .avatar-edit {
        @apply h-14 w-14 rounded object-cover;
    }
}
</style>
