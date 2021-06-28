<template>
    <Icon iconName="add" :width="width" :height="height" :iconColor="iconColor">
        <path
            d="M0.970909 9.97091H8.02909V17.0291C8.02909 17.5527 8.46545 18 9 18C9.53455 18 9.98182 17.5527 9.98182 17.0291V9.97091H17.0291C17.5527 9.97091 18 9.53455 18 9C18 8.46545 17.5527 8.01818 17.0291 8.01818H9.98182V0.970909C9.98182 0.447273 9.53455 0 9 0C8.46545 0 8.02909 0.447273 8.02909 0.970909V8.01818H0.970909C0.447273 8.01818 0 8.46545 0 9C0 9.53455 0.447273 9.97091 0.970909 9.97091Z"
        />
    </Icon>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Icon from '@/components/icons/Icon.vue';

@Options({
    components: {
        Icon,
    },
    props: {
        width: {
            type: Number,
            default: 18,
        },
        height: {
            type: Number,
            default: 18,
        },
        iconColor: {
            type: String,
            default: 'white',
        },
    },
})
export default class IconAdd extends Vue {}
</script>
