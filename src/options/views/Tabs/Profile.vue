<template>
    <div class="profile">
        <div class="avatar">
            <img :src="avatar" :alt="username" />
            <div class="change">
                <IconAdd width="36" height="36" icon-color="#fff" />
            </div>
        </div>
        <div class="username">
            <Input view-type="options" input-type="text" v-model="username" />
        </div>
        <div class="bio">
            <Input view-type="options" input-type="text-area" v-model="bio" />
        </div>
        <div class="btn-save">
            <Button button-style="primary" button-size="xxl" @click="saveProfile"> Save </Button>
        </div>
        <div class="btn-discard">
            <Button button-style="secondary" button-size="xxl" @click="resetProfile"> Discard </Button>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import RSS3 from '@/common/rss3';
import { ThirdPartyAddress } from 'rss3/types/rss3';
import IconAdd from '@/components/icons/IconAdd.vue';

@Options({
    components: {
        IconAdd,
        Button,
        Input,
    },
})
export default class TabsProfile extends Vue {
    avatar: string = '';
    username: String = '';
    bio: String = '';
    rss3: any;

    async mounted() {
        this.rss3 = await RSS3.get();
        if (typeof this.rss3 !== 'undefined') {
            const profile = await this.rss3.profile.get();
            this.avatar = profile?.avatar[0] || '';
            this.username = profile?.name || '';
            this.bio = profile?.bio || '';
        }
    }

    async saveProfile() {
        console.log(this.username, this.bio);
        await this.rss3.profile.patch({
            name: this.username,
            avatar: this.avatar,
            bio: this.bio,
        });
        await this.rss3.persona.sync();
    }

    async resetProfile() {
        const profile = await this.rss3.profile.get();
        this.avatar = profile?.avatar[0] || '';
        this.username = profile?.name || '';
        this.bio = profile?.bio || '';
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

        .avatar {
            @apply relative;
            > img {
                @apply w-30 h-30 rounded;
            }
            > .change {
                @apply absolute left-12 top-12; /* Change 12 to 10 when icon size applies */
            }
        }
    }
}
</style>
