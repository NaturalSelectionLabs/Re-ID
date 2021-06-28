<template>
    <Icon iconName="x" :width="width" :height="height" :iconColor="iconColor">
        <path
            d="M0.407651 15.5169C-0.132211 16.0568 -0.143229 17.0153 0.418668 17.5772C0.991583 18.1391 1.95011 18.1281 2.47896 17.5992L9.00137 11.0768L15.5128 17.5882C16.0636 18.1391 17.0112 18.1391 17.573 17.5772C18.1349 17.0043 18.1349 16.0678 17.5841 15.5169L11.0727 9.00551L17.5841 2.4831C18.1349 1.93222 18.146 0.984707 17.573 0.42281C17.0112 -0.139087 16.0636 -0.139087 15.5128 0.411792L9.00137 6.92319L2.47896 0.411792C1.95011 -0.128069 0.980565 -0.150104 0.418668 0.42281C-0.143229 0.984707 -0.132211 1.95425 0.407651 2.4831L6.91904 9.00551L0.407651 15.5169Z"
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
export default class IconX extends Vue {
    width: Number = 18;
    height: Number = 18;
    iconColor: String = '#282828';
}
</script>
