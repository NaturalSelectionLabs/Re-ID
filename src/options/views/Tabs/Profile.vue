<template>
    <div class="profile">
        <div class="avatar">
            <img :src="$props.avatar" :alt="$props.username" />
        </div>
        <div class="username">
            <Input
                :original-value="$props.username"
                view-type="options"
                input-type="text"
            />
        </div>
        <div class="bio">
            <Input
                :placeholder-text="$props.bio"
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
    components: { Button, Input },
    props: {
        avatar: String,
        username: String,
        bio: String,
    },
})
export default class TabsProfile extends Vue {}
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
