import { makeInstaller } from "@hy-element/utils";  
import components from "./components";

// 创建installer
const installer = makeInstaller(components);

export * from '@hy-element/components';
export default installer