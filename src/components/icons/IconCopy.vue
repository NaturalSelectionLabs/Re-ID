<template>
    <Icon iconName="copy" :width="width" :height="height" :iconColor="iconColor">
        <path
            d="M1.3,15.6c0,1.6,0.9,2.4,2.5,2.4h6.8c1.6,0,2.5-0.8,2.5-2.4v-1.3h1.2c1.6,0,2.5-0.8,2.5-2.4V6.5c0-1-0.2-1.6-0.8-2.2l-3.6-3.5C11.7,0.2,11,0,10.1,0H7.4C5.8,0,5,0.8,5,2.4v1.3H3.8c-1.6,0-2.5,0.8-2.5,2.4V15.6z M12.3,8.2L8.4,4.4c-0.5-0.5-1-0.7-1.7-0.7V2.5c0-0.6,0.3-0.9,1-0.9h2.9v3.1c0,0.9,0.5,1.4,1.5,1.4h3v5.6c0,0.6-0.3,0.9-1,0.9h-1v-2.4C13,9.3,12.9,8.8,12.3,8.2z M11.8,4.6V2.2l2.8,2.7h-2.4C11.9,4.9,11.8,4.8,11.8,4.6z M3,15.5V6.2c0-0.6,0.3-0.9,1-0.9H6v3.6c0,1.1,0.6,1.7,1.7,1.7h3.6v4.9c0,0.6-0.3,0.9-1,0.9H3.9C3.3,16.4,3,16.1,3,15.5z M7.9,9.2c-0.3,0-0.4-0.1-0.4-0.4V5.6l3.7,3.6H7.9z"
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
            default: 18,
            type: Number,
        },
        height: {
            default: 18,
            type: Number,
        },
        iconColor: {
            default: '#3C3C43',
            type: String,
        },
    },
})
export default class IconCopy extends Vue {}
</script>
