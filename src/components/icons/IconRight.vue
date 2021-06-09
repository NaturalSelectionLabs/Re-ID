<template>
    <Icon
        iconName="right"
        :width="width"
        :height="height"
        :iconColor="iconColor"
    >
        <path
            d="M18,9c0-0.3-0.1-0.7-0.4-0.9L11.5,2c-0.3-0.3-0.6-0.4-0.9-0.4c-0.7,0-1.2,0.5-1.2,1.1c0,0.4,0.1,0.6,0.4,0.9l2.1,2.1
	l2.4,2.2l-2.1-0.1h-11C0.5,7.8,0,8.3,0,9c0,0.7,0.5,1.2,1.2,1.2h11l2.1-0.1l-2.4,2.2l-2.1,2.1c-0.2,0.2-0.4,0.5-0.4,0.9
	c0,0.7,0.5,1.1,1.2,1.1c0.3,0,0.6-0.1,0.8-0.4l6.1-6.1C17.9,9.7,18,9.3,18,9z"
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
})
export default class IconRight extends Vue {
    width: Number = 18;
    height: Number = 18;
    iconColor: String = '#5C65F4';
}
</script>
