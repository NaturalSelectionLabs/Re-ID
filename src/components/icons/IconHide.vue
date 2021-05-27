<template>
    <Icon
        iconName="hide"
        :width="width"
        :height="height"
        :iconColor="iconColor"
    >
        <path
            d="M14.2,15c0.2,0.2,0.5,0.2,0.8,0c0.2-0.2,0.2-0.5,0-0.7L3.8,3C3.6,2.8,3.2,2.8,3,3C2.8,3.2,2.8,3.6,3,3.8L14.2,15z M9,3.4
	c-1.1,0-2.2,0.2-3.1,0.5l1.2,1.2C7.7,5,8.3,4.9,9,4.9c4,0,7.2,3.5,7.2,4.2c0,0.5-1,1.7-2.5,2.7l1.1,1.1c2-1.4,3.2-3.1,3.2-3.9
	C18,7.8,14.4,3.4,9,3.4z M9,14.8c1.2,0,2.3-0.2,3.3-0.5L11.1,13c-0.7,0.2-1.3,0.3-2.1,0.3c-4,0-7.2-3.3-7.2-4.2c0-0.4,1-1.7,2.7-2.8
	L3.3,5.2C1.2,6.5,0,8.3,0,9.1C0,10.4,3.7,14.8,9,14.8z M12.2,10.2c0.1-0.3,0.2-0.7,0.2-1.1c0-1.9-1.5-3.4-3.4-3.4
	c-0.4,0-0.8,0.1-1.1,0.2L12.2,10.2z M9,12.5c0.4,0,0.9-0.1,1.2-0.3L5.9,7.9C5.7,8.2,5.6,8.7,5.6,9.1C5.6,10.9,7.1,12.5,9,12.5z"
        />
    </Icon>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Icon from '@components/icons/Icon.vue';

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
export default class IconHide extends Vue {
    width: Number = 18;
    height: Number = 18;
    iconColor: String = '#282828';
}
</script>
