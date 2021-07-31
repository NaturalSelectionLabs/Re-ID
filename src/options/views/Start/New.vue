<template>
    <Button class="mb-15" buttonStyle="primary" buttonSize="xxl" @click="$router.push('/start/privatekey')"
        >Yes, help me set up</Button
    >
    <Button buttonStyle="secondary" buttonSize="xxl" @click="login">No, I’ve got a private key</Button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/Button.vue';
import MultiAccounts from '@/common/multi-accounts';

@Options({
    components: {
        Button,
    },
})
export default class StartNew extends Vue {
    async login() {
        if (await MultiAccounts.get()) {
            await this.$router.push('/start/login-back');
        } else {
            await this.$router.push('/start/login');
        }
    }
}
</script>

<style lang="postcss" scoped></style>
