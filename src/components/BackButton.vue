<template>
    <button
        class="back justify-start focus:outline-none"
        :class="{
            'back-options': viewType === 'options',
            'back-popup': viewType === 'popup',
        }"
        @click="back"
    >
        <IconBack
            class="back-icon"
            iconColor="#5c65f4"
            :width="viewType === 'popup' ? 10 : 18"
            :height="viewType === 'popup' ? 10 : 18"
        />
        <span class="back-text" :class="[viewType == 'popup' ? 'ml-4' : 'ml-6']">Back</span>
    </button>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import IconBack from '@/components/icons/IconBack.vue';
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

    back() {
        this.$router.back();
    }
}
</script>

<style lang="postcss">
@layer components {
    .back {
        @apply font-medium text-primary w-max;
    }

    .back-icon {
        @apply align-middle inline;
    }

    .back-text {
        @apply align-middle;
    }

    .back-options {
        @apply text-2xl;
    }
    .back-popup {
        @apply text-xs;
    }
}
</style>
