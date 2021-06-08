<template>
    <div>
        <SidebarLeft />
        <div class="main">
            <slot />
        </div>
        <SidebarRight />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SidebarLeft from '../components/SidebarLeft.vue';
import SidebarRight from '../components/SidebarRight.vue';

@Options({
    components: {
        SidebarLeft,
        SidebarRight,
    },
})
export default class BothSides extends Vue {}
</script>

<style lang="postcss" scoped></style>
