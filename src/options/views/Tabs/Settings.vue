<template>
    <div class="settings">
        <div class="address">
            <KeyContainer :key-text="publicaddr" view-type="options" :is-private="!privateIsPrivate" />
        </div>
        <div class="private-key">
            <KeyContainer
                :key-text="privateKey"
                view-type="options"
                :is-private="privateIsPrivate"
                :blur="blurPrivateKey"
            />
        </div>
        <div class="btn-view">
            <Button button-style="primary" button-size="xxl" @click="blurPrivateKey = false"> View private key </Button>
        </div>
        <div class="warning">
            <p>
                Warning: Never disclose your private keys. Anyone with your private keys can steal any asset or
                information held in your account.
            </p>
        </div>
        <div class="btn-logout">
            <Button button-style="secondary" button-size="xxl" @click="logOut"> Log out </Button>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import KeyContainer from '@/components/KeyContainer.vue';
import RSS3 from '@/common/rss3';

@Options({
    components: {
        KeyContainer,
        Button,
        Input,
    },
})
export default class TabsSettings extends Vue {
    publicaddr: String = '';
    privateKey: String = '';
    privateIsPrivate: Boolean = true;
    blurPrivateKey: Boolean = true;

    async mounted() {
        const rss3 = await RSS3.get();
        if (rss3) {
            this.publicaddr = rss3.persona.id;
            this.privateKey = rss3.persona.privateKey;
        }
    }

    logOut() {
        chrome.storage.sync.remove(['privateKey']);
        this.$router.push('/start');
    }
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
