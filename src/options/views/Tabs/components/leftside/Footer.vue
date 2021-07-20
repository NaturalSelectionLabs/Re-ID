<template>
    <div class="footer">
        <Logo :width="logoSize" :height="logoSize" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Logo from '@/components/Logo.vue';

@Options({
    components: { Logo },
})
export default class Footer extends Vue {
    logoSize: Number = 60;
}
</script>

<style lang="postcss" scoped>
@layer components {
    .footer {
        @apply fixed bottom-18 pointer-events-none;
    }
}
</style>
