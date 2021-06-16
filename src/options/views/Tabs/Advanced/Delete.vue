<template>
    <div class="delete">
        <div class="warning">
            <p>
                Are you sure you would like to delete your RSS3 file? This operation can not be recovered and you will
                lose all data for the current persona.
            </p>
        </div>
        <div class="private-key">
            <Input
                placeholder-text="Verify your private key"
                :is-compact="isCompact"
                input-type="password"
                v-model="inputPrivateKey"
            />
        </div>
        <div class="confirm">
            <Button button-style="primary" button-size="xxl" @click="confirmDelete"> Confirm </Button>
        </div>

        <div class="cancel">
            <router-link to="/advanced">
                <Button button-style="secondary" button-size="xxl"> Cancel </Button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import RSS3 from '@/common/rss3';

@Options({
    components: { Button, Input },
})
export default class TabsAdvancedDelete extends Vue {
    inputPrivateKey: string = '';
    isCompact: Boolean = true;

    async confirmDelete() {
        const rss3 = await RSS3.get();
        const privateKey = rss3.persona.privateKey;
        if (this.inputPrivateKey === privateKey) {
            // Do delete
            console.log('Do delete');
        }
    }
}
</script>

<style lang="postcss" scoped>
@layer components {
    .delete {
        @apply mt-32;

        > * {
            @apply mt-8 mx-8;
        }

        > .warning {
            @apply text-danger font-semibold text-2xl;
        }
    }
}
</style>
