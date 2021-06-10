<template>
    <div class="settings">
        <div class="address">
            <KeyContainer :key-text="publicaddr" view-type="options" is-private="false" />
        </div>
        <div class="private-key">
            <KeyContainer :key-text="privateKey" view-type="options" is-private="true" />
        </div>
        <div class="btn-view">
            <Button button-style="primary" button-size="xxl"> View private key </Button>
        </div>
        <div class="warning">
            <p>
                Warning: Never disclose your private keys. Anyone with your private keys can steal any asset or
                information held in your account.
            </p>
        </div>
        <div class="btn-logout">
            <Button button-style="secondary" button-size="xxl"> Log out </Button>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import KeyContainer from '@/components/KeyContainer.vue';

@Options({
    components: {
        KeyContainer,
        Button,
        Input,
    },
})
export default class TabsSettings extends Vue {
    publicaddr: String = '0x24793Ef2A065CD38361E5FA5ff2A065CDd5C68B0';
    privateKey: String = '0x24793Ef2A065CD38361E5FA5ff2A065CDd5C68B0';
}
</script>

<style lang="postcss" scoped>
@layer components {
    .settings {
        @apply mt-40;

        > * {
            @apply mt-8;
        }

        > .warning {
            @apply text-danger font-semibold text-2xl;
        }

        > .btn-logout {
            @apply mt-24;
        }
    }
}
</style>
