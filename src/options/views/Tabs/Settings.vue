<template>
    <div class="settings">
        <div class="address">
            <Input
                :original-value="$props.publicaddr"
                view-type="options"
                input-type="text"
            />
        </div>
        <div class="private-key">
            <Input
                :original-value="$props.privateKey"
                view-type="options"
                input-type="text"
            />
        </div>
        <div class="btn-view">
            <Button
                button-style="primary"
                button-text="View private key"
                button-size="xxl"
            />
        </div>
        <div class="warning">
            <p>
                Warning: Never disclose your private keys. Anyone with your
                private keys can steal any asset or information held in your
                account.
            </p>
        </div>
        <div class="btn-logout">
            <Button
                button-style="secondary"
                button-text="Log out"
                button-size="xxl"
            />
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
    props: {
        publicaddr: String,
        privateKey: String,
    },
})
export default class TabsSettings extends Vue {}
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
