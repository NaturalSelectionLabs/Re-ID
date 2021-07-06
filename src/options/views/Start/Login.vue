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

    login() {
        if (this.verifyKeyLength()) {
            RSS3.set(this.privateKey);
            this.$router.push('/');
        }
    }
}
</script>

<style lang="postcss" scoped></style>
