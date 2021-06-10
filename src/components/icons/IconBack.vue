<template>
    <Icon iconName="back" :width="width" :height="height" :iconColor="iconColor">
        <path
            d="M3.7,9c0,0.4,0.2,0.8,0.5,1.1l7.7,7.5c0.3,0.3,0.6,0.4,1,0.4c0.8,0,1.4-0.6,1.4-1.4c0-0.4-0.2-0.7-0.4-1L7,9l6.8-6.6c0.3-0.3,0.4-0.6,0.4-1c0-0.8-0.6-1.4-1.4-1.4c-0.4,0-0.7,0.1-1,0.4L4.2,7.9C3.9,8.2,3.7,8.6,3.7,9z"
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
        width: Number,
        height: Number,
        iconColor: String,
    },
    components: {
        Icon,
    },
})
export default class IconBack extends Vue {
    width: Number = 18;
    height: Number = 18;
    iconColor: String = '#5C65F4';
}
</script>
