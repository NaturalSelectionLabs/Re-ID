<template>
    <popup-container>
        <div class="row-start-2 row-end-3 flex flex-col justify-start items-left gap-y-5">
            <p><logo width="55" height="55" class="inline" /></p>
            <p><logo-title height="30" width="100" class="inline" /></p>
            <Input inputType="password" placeholderText="Private Key" viewType="popup" minlength="1" maxLength="128" />
            <Button buttonStyle="primary" buttonSize="lg" @click="$router.push('/home')">Continue</Button>
            <Button buttonStyle="secondary" buttonSize="lg" @click="$router.push('/onboarding')">Go back</Button>
        </div>
    </popup-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PopupContainer from '@/components/PopupContainer.vue';
import Logo from '@/components/Logo.vue';
import LogoTitle from '@/components/LogoTitle.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';

@Options({
    components: { PopupContainer, Logo, LogoTitle, Button, Input },
})
export default class App extends Vue {}
</script>

<style lang="postcss">
@layer components {
    .mainContainer {
        @apply w-65 h-105 rounded-lg bg-white backdrop-filter backdrop-blur;
    }
}
</style>
