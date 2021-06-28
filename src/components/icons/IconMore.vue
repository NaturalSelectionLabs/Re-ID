<template>
    <Icon iconName="more" :width="width" :height="height" :iconColor="iconColor">
        <path
            d="M3.3,9c0-0.9-0.7-1.7-1.7-1.7C0.7,7.3,0,8.1,0,9c0,0.9,0.7,1.7,1.7,1.7C2.6,10.7,3.3,9.9,3.3,9z M10.7,9
	c0-0.9-0.7-1.7-1.7-1.7C8.1,7.3,7.4,8.1,7.4,9c0,0.9,0.7,1.7,1.6,1.7C9.9,10.7,10.7,9.9,10.7,9z M18,9c0-0.9-0.7-1.7-1.7-1.7
	c-0.9,0-1.7,0.7-1.7,1.7c0,0.9,0.7,1.7,1.7,1.7C17.2,10.7,18,9.9,18,9z"
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
export default class IconMore extends Vue {
    width: Number = 18;
    height: Number = 18;
    iconColor: String = '#5C65F4';
}
</script>
