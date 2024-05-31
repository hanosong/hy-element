<script lang="ts" setup>
import type { ButtonProps } from './types';
import {ref} from 'vue';
defineOptions({
    name: 'HyButton'
})
const props = withDefaults(defineProps<ButtonProps>(), {
    tag: "button",
    nativeType: "button",

})
const slots = defineSlots();

const _ref = ref<HTMLButtonElement>()
</script>

<template>
    <component
      :is="tag"
      ref="_ref"
      class="hy-button"
      :type = "tag === 'button' ? nativeType : void 0"
      :disabled="disabled || loading ? true : void 0"
      :class="{
        [`hy-button--${type}`] : type,
        [`hy-button--${size}`] : size,
        'is-plain' : plain,
        'is-round' : round,
        'is-circle' : circle,
        'is-disabled' : disabled,
        'is-loading' : loading,
      }"
    >
      <slot></slot>
    </component>

</template>