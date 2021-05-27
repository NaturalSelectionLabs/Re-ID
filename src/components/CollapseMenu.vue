<template>
    <div class="collapseMenu">
       <div> <Button buttonText="Profile" buttonStyle="menuItem" buttonSize="xs"/> </div>
       <div> <Button buttonText="Account" buttonStyle="menuItem" buttonSize="xs"/> </div>
       <div> <Button buttonText="Log out" buttonStyle="menuItem" buttonSize="xs"/> </div>
    </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Button from '@components/Button.vue'

export default defineComponent({
    components: {
        Button
    },
})

</script>

<style lang="postcss">

@layer components {
.collapseMenu {
    @apply grid-rows-3 w-27 h-24 px-2 bg-white rounded drop-shadow backdrop-filter backdrop-blur divide-y divide-black divide-opacity-10;
}

}

</style>