<template>
    <div class="mb-15">
        <Input inputType="text" placeholderText="Private Key" viewType="options" v-model="privateKey" />
    </div>
    <Button buttonStyle="primary" buttonSize="xl" @click="login">Continue</Button>
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
    privateKey: String = '';

    login() {
        chrome.storage.sync.set(
            {
                privateKey: this.privateKey,
            },
            async () => {
                await RSS3.get();
                this.$router.push('/home');
            },
        );
    }
}
</script>

<style lang="postcss" scoped></style>
