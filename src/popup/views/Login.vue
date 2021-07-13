<template>
    <popup-container>
        <div class="row-start-2 row-end-3 flex flex-col justify-start items-left gap-y-5">
            <p><logo width="55" height="55" class="inline" /></p>
            <p><logo-title height="30" width="100" class="inline" /></p>
            <div class="text-right text-danger font-normal text-xs" v-show="!isKeyValid">&#9432; Wrong key length</div>
            <Input
                :class="isKeyValid ? 'mt-9' : ''"
                inputType="password"
                placeholderText="Private Key"
                viewType="popup"
                minlength="1"
                v-model="privateKey"
                @input="isKeyValid = true"
            />
            <Button :buttonStyle="isKeyValid ? 'primary' : 'disabled'" buttonSize="lg" @click="next()">Continue</Button>
            <Button buttonStyle="secondary" buttonSize="lg" @click="$router.back()">Go back</Button>
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
    isKeyValid: boolean = true;

    verifyKeyLength(): Boolean {
        this.isKeyValid = this.privateKey.length === 64;
        return this.isKeyValid;
    }

    async next() {
        if (this.verifyKeyLength()) {
            const rss3 = await RSS3.set(this.privateKey);
            if (rss3 && (await reidInvite.invite.check(rss3.persona.id))) {
                await this.$router.push('/home');
            } else {
                await this.$router.push('/pending');
            }
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
