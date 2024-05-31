import { describe, it, test,expect } from "vitest"; // describe: 分组；it/test: 测试，it用于详细的断言
import {mount} from '@vue/test-utils'

import Button from './Button.vue';
describe("Button.vue", () => {
    // Props: type 按钮类型
    it("should has the correct type class when type prop is set", () => {
      const types = ["primary", "success", "warning", "danger", "info"];
      types.forEach((type) => {
        const wrapper = mount(Button, {
          props: { type: type as any },
        });
        expect(wrapper.classes()).toContain(`hy-button--${type}`);
      });
    });
  
    // Props: size 大小
    it("should has the correct size class when size prop is set", () => {
      const sizes = ["large", "default", "small"];
      sizes.forEach((size) => {
        const wrapper = mount(Button, {
          props: { size: size as any },
        });
        expect(wrapper.classes()).toContain(`hy-button--${size}`);
      });
    });
  
    // Props: plain, round, circle 圆角
    it.each([
      ["plain", "is-plain"],
      ["round", "is-round"],
      ["circle", "is-circle"],
      ["disabled", "is-disabled"],
      ["loading", "is-loading"],
    ])(
      "should has the correct class when prop %s is set to true",
      (prop, className) => {
        const wrapper = mount(Button, {
          props: { [prop]: true },
          global: {
            stubs: ["ErIcon"],
          },
        });
        expect(wrapper.classes()).toContain(className);
      }
    );
  
    it("should has the correct native type attribute when native-type prop is set", () => {
      const wrapper = mount(Button, {
        props: { nativeType: "submit" },
      });
      expect(wrapper.element.tagName).toBe("BUTTON");
      expect((wrapper.element as any).type).toBe("submit");
    });
  
    // Props: tag 按钮类型
    it("should renders the custom tag when tag prop is set", () => {
      const wrapper = mount(Button, {
        props: { tag: "a" },
      });
      expect(wrapper.element.tagName.toLowerCase()).toBe("a");
    });
  
    // Events: click
    it("should emits a click event when the button is clicked", async () => {
      const wrapper = mount(Button, {});
      await wrapper.trigger("click");
      expect(wrapper.emitted().click).toHaveLength(1);
    });
  });