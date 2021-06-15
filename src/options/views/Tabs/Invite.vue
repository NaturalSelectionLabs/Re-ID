<template>
    <div class="invite">
        <h2>You can invite others to RSS3 using their public keys.</h2>
        <div class="address">
            <Input
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
import RSS3 from '@/common/rss3';

@Options({
    components: {
        Button,
        Input,
    },
})
export default class TabsInvite extends Vue {
    invitee: string = '';
    RSS3: any;

    async mounted() {
        this.RSS3 = await RSS3.get();
        const isInvited = await reidInvite.check(this.RSS3.persona.id);
        console.log(isInvited);
    }

    async sendInvitation() {
        const inviteSuccess = await reidInvite.new(this.RSS3.persona.id, this.invitee);
        console.log(inviteSuccess);
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
