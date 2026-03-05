import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['./src/index.ts'], // 打包入口.
  outDir: './dist', // 指定打包后输出目录.
  declaration: true, // 打包导出ts类型代码,方便其它子项目使用时有类型提示.
  clean: true, // 打包前先清空输出目录.
  rollup: {
    emitCJS: true, // 打包导出cjs模块,方便其它子项目使用.
  },
  externals: ['react', 'react-dom'], // 打包时排除依赖,因为这些依赖已经在公共依赖中安装了.
});
