<template>
    <div class="profile">
        <div class="avatar">
            <img :src="avatar" :alt="username" />
        </div>
        <div class="username">
            <Input :original-value="username" view-type="options" input-type="text" />
        </div>
        <div class="bio">
            <Input :original-value="bio" view-type="options" input-type="text-area" />
        </div>
        <div class="btn-save">
            <Button button-style="primary" button-size="xxl"> Save </Button>
        </div>
        <div class="btn-discard">
            <Button button-style="secondary" button-size="xxl"> Discard </Button>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import RSS3 from '@/common/rss3';
import { ThirdPartyAddress } from 'rss3/types/rss3';

@Options({
    components: {
        Button,
        Input,
    },
})
export default class TabsProfile extends Vue {
    avatar: ThirdPartyAddress = [];
    username: String = '';
    bio: String = '';

    async mounted() {
        const rss3 = await RSS3.get();
        if (typeof rss3 !== 'undefined') {
            const profile = await rss3.profile.get();
            if (typeof profile !== 'undefined') {
                if (typeof profile.avatar !== 'undefined') {
                    this.avatar = profile.avatar;
                }
                if (typeof profile.name !== 'undefined') {
                    this.username = profile.name;
                }
                if (typeof profile.bio !== 'undefined') {
                    this.bio = profile.bio;
                }
            }
        }
    }
}
</script>

<style lang="postcss" scoped>
@layer components {
    .profile {
        @apply mt-24;

        > div {
            @apply mt-8;
        }

        .avatar > img {
            @apply w-30 h-30 rounded;
        }
    }
}
</style>
