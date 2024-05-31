import type { Component } from "vue";

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
}