<template>
    <div class="profile">
        <div class="avatar">
            <img :src="avatar" :alt="username" />
        </div>
        <div class="username">
            <Input
                :original-value="username"
                view-type="options"
                input-type="text"
            />
        </div>
        <div class="bio">
            <Input
                :original-value="bio"
                view-type="options"
                input-type="text-area"
            />
        </div>
        <div class="btn-save">
            <Button
                button-style="primary"
                button-text="Save"
                button-size="xxl"
            />
        </div>
        <div class="btn-discard">
            <Button
                button-style="secondary"
                button-text="Discard"
                button-size="xxl"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

@Options({
    components: {
        Button,
        Input,
    },
})
export default class TabsProfile extends Vue {
    avatar: String = 'https://aka.ms/no';
    username: String = 'demo';
    bio: String =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
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
