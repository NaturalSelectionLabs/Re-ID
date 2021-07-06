<template>
    <popup-container>
        <back-button viewType="popup" />
        <div class="w-55 h-79 pt-7 flex flex-col gap-5">
            <div class="flex flex-col gap-2.5">
                <img class="avatar" :src="avatarUrl" />
                <div class="h-10 w-35 flex flex-col gap-2.5">
                    <p class="font-xs font-semibold">{{ username }}</p>
                    <key-container :keyText="address" :isPrivate="false" viewType="popup" :isCollapse="true" />
                </div>
            </div>
            <div class="text-right font-normal text-xs" v-show="isInviteFinished">
                <span :class="isInviteSuccessful ? 'text-success' : 'text-danger'">{{ inviteMsg }}</span>
            </div>
            <Input
                :class="isInviteFinished ? '' : 'mt-9'"
                inputType="text"
                placeholderText="Invitee's Address"
                viewType="popup"
                minlength="1"
                maxLength="128"
                v-model="invitee"
                @input="isInviteFinished = false"
            />
            <Button buttonStyle="primary" buttonSize="lg" @click="sendInvitation">Send invitation</Button>
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
import RSS3, { IRSS3 } from '@/common/rss3';
import reidInvite from '@/common/invite';

@Options({
    components: { PopupContainer, BackButton, Button, Input, KeyContainer },
})
export default class Invite extends Vue {
    avatarUrl: any;
    username: any;
    bio: any;
    address: string = ''; // public address
    invitee: string = '';
    isInviteFinished = false;
    isInviteSuccessful = true;
    inviteMsg = '';
    rss3?: IRSS3 | null;
    async mounted() {
        this.rss3 = await RSS3.get();
        if (this.rss3) {
            const profile = await this.rss3.profile.get();
            this.avatarUrl = profile.avatar;
            this.username = profile.name;
            this.bio = profile.bio;
            this.address = this.rss3.persona.id;

            const isInvited = await reidInvite.check(this.rss3.persona.id);
            console.log(isInvited);
        }
    }

    async sendInvitation() {
        if (this.invitee.length !== 42) {
            this.isInviteSuccessful = false;
            this.inviteMsg = 'Invalid invitee address';
            this.isInviteFinished = true;
        } else if (this.rss3) {
            this.isInviteSuccessful = await reidInvite.new(this.rss3.persona.id, this.invitee);
            this.inviteMsg = reidInvite.msg();
            this.isInviteFinished = true;
        }
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
