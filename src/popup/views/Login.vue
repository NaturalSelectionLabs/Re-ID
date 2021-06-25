<template>
    <popup-container>
        <div class="row-start-2 row-end-3 flex flex-col justify-start items-left gap-y-5">
            <p><logo width="55" height="55" class="inline" /></p>
            <p><logo-title height="30" width="100" class="inline" /></p>
            <Input
                inputType="password"
                placeholderText="Private Key"
                viewType="popup"
                minlength="1"
                v-model="privateKey"
            />
            <Button buttonStyle="primary" buttonSize="lg" @click="next()">Continue</Button>
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
import RSS3 from '@/common/rss3';
import reidInvite from '@/common/invite';

@Options({
    components: { PopupContainer, Logo, LogoTitle, Button, Input },
})
export default class Login extends Vue {
    privateKey: string = '';

    async next() {
        const rss3 = await RSS3.get();
        if (rss3 && (await reidInvite.check(rss3.persona.id))) {
            RSS3.set(this.privateKey);
            this.$router.push('/home');
        } else {
            this.$router.push('/pending');
        }
    }
}
</script>

<style scoped lang="postcss">
@layer components {
    .mainContainer {
        @apply w-65 h-105 rounded-lg bg-white backdrop-filter backdrop-blur;
    }
}
</style>
