<template>
    <div class="invite">
        <h2>You can invite others to Re: ID using their public keys.</h2>
        <div class="address">
            <div class="text-right font-medium text-2xl mb-2" v-show="isInviteFinished">
                <span class="text-success" v-if="isInviteSuccessful"> Invited successfully </span>
                <span class="text-danger" v-else> Failed to invite.. Maybe already invited or request error? </span>
            </div>
            <Input
                :class="isInviteFinished ? '' : 'mt-10'"
                placeholder-text="Invitee’s public address"
                view-type="options"
                input-type="text"
                v-model="invitee"
            />
        </div>
        <div class="btn-send">
            <Button button-style="primary" button-size="xxl" @click="sendInvitation"> Send invitation </Button>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import reidInvite from '@/common/invite';
import RSS3, { IRSS3 } from '@/common/rss3';

@Options({
    components: {
        Button,
        Input,
    },
})
export default class TabsInvite extends Vue {
    invitee: string = '';
    isInviteFinished = false;
    isInviteSuccessful = true;
    RSS3?: IRSS3;

    async mounted() {
        const rss3 = await RSS3.get();
        if (!rss3) {
            await this.$router.push('/start');
        } else {
            this.RSS3 = rss3;
            const isInvited = await reidInvite.check(this.RSS3.persona.id);
            console.log(isInvited);
        }
    }

    async sendInvitation() {
        if (this.RSS3) {
            this.isInviteSuccessful = await reidInvite.new(this.RSS3.persona.id, this.invitee);
            this.isInviteFinished = true;
        }
    }
}
</script>

<style lang="postcss" scoped>
@layer components {
    .invite {
        @apply mt-40;

        > h2 {
            @apply font-semibold text-2xl leading-6;
        }

        .address {
            @apply mt-32;
        }

        .btn-send {
            @apply mt-8;
        }
    }
}
</style>
