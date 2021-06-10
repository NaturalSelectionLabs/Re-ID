<template>
    <div class="invite">
        <h2>You can invite others to RSS3 using their public keys.</h2>
        <div class="address">
            <Input placeholder-text="Invitee’s public key" view-type="options" input-type="text" />
        </div>
        <div class="btn-send">
            <Button button-style="primary" button-size="xxl"> Send invitation </Button>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

@Options({
    components: {
        Button,
        Input,
    },
})
export default class TabsInvite extends Vue {}
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
