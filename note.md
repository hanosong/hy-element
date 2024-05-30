linux环境
创建文件 vim .gitignore => :wq
创建pnpm共享仓库：echo -e 'packages:\n - "packages/*"' > pnpm-workspace.yaml
    - pnpm-workspace.yaml 的目的是什么：
     -这是 pnpm 的工作空间，意思就是在 "packages" 这个目录底下都是这个项目的子包，每个子包都有独立的package.json 来管理，可以独立发布 npm 这是这些年前端圈子比较流行的 项目管理方式 monorepo
初始化：pnpm init

1. 创建目录以下目录：mkdir components core docs hooks theme utils
2. 写一个shell脚本创建init目录：vim init.shell
3. 在 init.shell 中编写脚本
~~~sh
for i in components core docs hooks theme utils; do
cd $i
pnpm init
cd..
done
~~~
4. 执行：./init.shell

用vite创建项目： pnpm create vite play --template vue-ts => paly目录下，模板类型为vue3 + ts \

packages中的层级说明
~~~md
- components # 组件目录
- core # npm 包入口
- docs # 文档目录
- hooks # 组合式API hooks 目录
- play # 组件开发实验室 用于写简单组件看效果
- theme # 主题目录
- utils # 工具函数目录
~~~

