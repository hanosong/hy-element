import type { Component, Ref } from "vue";

// 定义按钮类型
export type ButtonType = "primary"| "success"| "warning"|"danger"| "info";
export type NativeType = "button" | "submit" | "reset";
export type ButtonSize = "large" | "default" | "small";

export interface ButtonProps {
    tag?: string | Component;
    type?: ButtonType;
    size?: ButtonSize;
    nativeType?: NativeType;
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
    loading?: boolean;
    disabled?: boolean;
    icon?: string;
    loadingIcon?: string;
    autofocus?: boolean;
    useThrottle?: boolean;
    throttleDuration?: number;
}

// 定义节流
export interface ButtonEmits {
    (e: 'click', val: MouseEvent): void;
}

// button暴露的实例
export interface ButtonInstance {
    ref: Ref<HTMLButtonElement | void> ; // 暴露节点
}