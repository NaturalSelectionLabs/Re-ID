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
            <Button buttonStyle="primary" buttonSize="lg" @click="invite">Send invitation</Button>
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
import RSS3 from '@/common/rss3';

@Options({
    components: { PopupContainer, BackButton, Button, Input, KeyContainer },
})
export default class Invite extends Vue {
    avatarUrl = <any>'';
    username = <any>'';
    bio = <any>'';
    address = ''; // public address

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
