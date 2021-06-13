<template>
    <popup-container>
        <back-button viewType="popup" />
        <div class="w-55 h-79 pt-7 flex flex-col gap-5">
            <div class="flex flex-col gap-2.5">
                <img class="avatar" :src="avatarUrl" />
                <div class="h-10 w-35 flex flex-col gap-2.5">
                    <p class="font-xs font-semibold">{{ userID }}</p>
                    <key-container :keyText="address" :isPrivate="false" viewType="popup" :isCollapse="true" />
                </div>
            </div>
            <Input
                inputType="text"
                placeholderText="Invitee's Address"
                viewType="popup"
                minlength="1"
                maxLength="128"
            />
            <Button buttonStyle="primary" buttonSize="lg" @click="invite()">Send invitation</Button>
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

@Options({
    components: { PopupContainer, BackButton, Button, Input, KeyContainer },
})
export default class App extends Vue {
    avatarUrl = 'https://i.imgur.com/vTrCSys.jpg';
    userID = 'RSS3';
    address = '0x47e18d6c386898b424025cd9db446f779ef24ad33a26c499c87bb3d93u896yhl';
    bio = 'RSS3 is the dopest team yay';
    showingMenu = false;

    invite() {}
}
</script>

<style scoped lang="postcss">
@layer components {
    .avatar {
        @apply h-10 w-10 rounded object-cover;
    }
}
</style>
