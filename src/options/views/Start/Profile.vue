<template>
    <Avatar ref="avatar" class="block mb-8" size="md" :url="avatarUrl" />
    <Input class="block mb-8" v-model="name" inputType="text" viewType="options" placeholderText="Name" />
    <Input class="block mb-8" v-model="bio" inputType="textArea" viewType="options" placeholderText="Bio" />
    <p class="flex justify-between">
        <Button buttonStyle="primary" buttonSize="xl" @click="save()">Save and continue</Button>
        <Button buttonStyle="secondary" buttonSize="xl" @click="$router.push('/start/congrats')">Skip for now</Button>
    </p>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/Button.vue';
import Avatar from '@/components/Avatar.vue';
import Input from '@/components/Input.vue';
import RSS3 from '@/common/rss3';

@Options({
    components: {
        Button,
        Avatar,
        Input,
    },
})
export default class StartProfile extends Vue {
    avatarUrl: string = '';
    name: string = '';
    bio: string = '';

    async mounted() {
        const rss3 = await RSS3.get();
        if (rss3) {
            const profile = await rss3.profile.get();
            if (profile) {
                const avatar = profile.avatar;
                if (avatar) {
                    this.avatarUrl = avatar[0];
                }
                this.name = profile.name || '';
                this.bio = profile.bio || '';
            }
        }
    }

    async save() {
        const rss3 = await RSS3.get();
        if (rss3) {
            const avatarUrl = await (<any>this.$refs.avatar).upload();
            const profile: {
                name: string;
                bio: string;
                avatar?: string[];
            } = {
                name: this.name,
                bio: this.bio,
            };
            if (avatarUrl) {
                profile.avatar = [avatarUrl];
            }
            await rss3.profile.patch(profile);
            await rss3.persona.sync();
            this.$router.push('/start/congrats');
        }
    }
}
</script>

<style lang="postcss" scoped></style>
