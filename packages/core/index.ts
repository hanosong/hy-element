import { makeInstaller } from "@hy-element/utils";  
import components from "./components";
import '@hy-element/theme/index.css'; // 样式重置
// 创建installer
const installer = makeInstaller(components);

export * from '@hy-element/components';
export default installer