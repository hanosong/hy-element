<script lang="ts" setup>
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import { ref } from "vue";
import { throttle } from "lodash-es";
defineOptions({
  name: "HyButton",
});

const emits = defineEmits<ButtonEmits>();

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle: true,
  throttleDuration: 500,
});
const slots = defineSlots();

const _ref = ref<HTMLButtonElement>();

// 点击事件
const handleBtnClick = (e: MouseEvent) => emits("click", e);
//节流
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration);
// 暴露组件ref
defineExpose<ButtonInstance>({
  ref: _ref,
});
</script>

<template>
  <component
    :is="tag"
    ref="_ref"
    class="hy-button"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`hy-button--${type}`]: type,
      [`hy-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="
      (e: MouseEvent) =>
        useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)
    "
  >
    <slot></slot>
  </component>
</template>

<style scoped>
@import "./style.css";
</style>
