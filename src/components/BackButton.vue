<template>
    <button
        class="back"
        :class="{
            'back-options': viewType === 'options',
            'back-popup': viewType === 'popup',
        }"
    >
        <IconBack
            iconColor="#5c65f4"
            :width="viewType === 'popup' ? 10 : 18"
            :height="viewType === 'popup' ? 10 : 18"
        />
        <span>Back</span>
    </button>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import IconBack from '@components/icons/IconBack.vue';
@Options({
    props: {
        viewType: String, // options / popup
    },
    components: {
        IconBack,
    },
})
export default class BackButton extends Vue {
    viewType!: String;
}
</script>

<style lang="postcss">
@layer components {
    .backButton {
        @apply font-medium
        .back-options {
            @apply font-2xl; //24px
            span {
                @apply ml-6;
            }
        }
        .back-popup {
            @apply font-xs; //12px
            span {
                @apply ml-4;
            }
        }
    }
}
</style>
