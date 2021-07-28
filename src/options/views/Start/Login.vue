<template>
    <div class="mb-15">
        <div class="text-right text-danger font-medium text-2xl mb-2" v-show="!isKeyValid">
            &#9432; Wrong key length
        </div>
        <Input
            :class="isKeyValid ? 'mt-10' : ''"
            inputType="text"
            placeholderText="Private Key"
            viewType="options"
            v-model="privateKey"
            @input="isKeyValid = true"
        />
    </div>
    <Button :buttonStyle="isKeyValid ? 'primary' : 'disabled'" buttonSize="xl" @click="login"> Continue </Button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import RSS3 from '@/common/rss3';
import MultiAccounts from '@/common/multi-accounts';

@Options({
    components: {
        Button,
        Input,
    },
})
export default class StartLogin extends Vue {
    privateKey: string = '';
    isKeyValid: boolean = true;

    verifyKeyLength(): Boolean {
        this.isKeyValid = this.privateKey.length === 64;
        return this.isKeyValid;
    }

    async login() {
        if (this.verifyKeyLength()) {
            const rss3 = await RSS3.set(this.privateKey);
            const profile = await rss3.profile.get();

            await MultiAccounts.set({
                avatar:
                    profile?.avatar?.[0] ||
                    'https://gateway.pinata.cloud/ipfs/QmewKetg1XR4wX68w52FMzGiA2vK77LgqK7j86Lh5Lzpsp',
                name: profile?.name || '',
                address: rss3.persona.id,
                privateKey: rss3.persona.privateKey,
            });

            await this.$router.push('/');
        }
    }
}
</script>

<style lang="postcss" scoped></style>
