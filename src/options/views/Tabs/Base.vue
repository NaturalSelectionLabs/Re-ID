<template>
    <div>
        <SidebarLeft />
        <router-view></router-view>
        <SidebarRight />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SidebarLeft from '../../components/sidebars/SidebarLeft.vue';
import SidebarRight from '../../components/sidebars/SidebarRight.vue';

@Options({
    components: {
        SidebarLeft,
        SidebarRight,
    },
})
export default class TabsBase extends Vue {}
</script>

<style lang="postcss" scoped></style>
