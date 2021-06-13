<template>
    <popup-container>
        <back-button viewType="popup" />
        <div class="w-55 h-80 pt-3 grid grid-rows-account gap-2">
            <img class="avatar" :src="avatarUrl" />
            <p class="font-xs font-semibold">{{ userID }}</p>
            <key-container :keyText="address" :isPrivate="false" viewType="popup" :isCollapse="false" />
            <div
                class="absolute w-55 h-16 left-5 bottom-36"
                :class="{ filter: !privateKeyVisible, blur: !privateKeyVisible }"
            >
                <key-container :keyText="privateKey" :isPrivate="true" viewType="popup" :isCollapse="false" />
            </div>
            <Button class="absolute left-5 bottom-25" buttonStyle="primary" buttonSize="lg" @click="showPrivateKey()"
                >View private Key</Button
            >
            <p class="absolute left-5 bottom-6 w-55 text-danger font-normal font-xs">{{ warningMessage }}</p>
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
    privateKey = '0x47e18d6c386898b424025cd9db446f779ef24ad33a26c499c87bb3d93u896jkl';
    bio = 'RSS3 is the dopest team yay';
    showingMenu = false;
    warningMessage =
        'Warning: Never disclose your private keys. Anyone with your private keys can steal any asset or information held in your account.';

    privateKeyVisible = false;

    showPrivateKey() {
        this.privateKeyVisible = true;
    }
}
</script>

<style scoped lang="postcss">
@layer components {
    .avatar {
        @apply h-10 w-10 rounded object-cover;
    }
}
</style>
