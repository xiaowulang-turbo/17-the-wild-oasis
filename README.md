# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and
some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

Needed:

# plugins

vscode-styled-components

# npms

react-query date-fns@2.30.0 react-hook-form@7

# learning

- 中文图片发送时报错，尚未解决
- input 组件默认内容为 string，validate 时需要转换为 number 进行比较
- supabase 返回的 data 类型不定，有时是 array（全部 select），有时返回单个对象
  （select 单个），没有 select 语句的话默认返回为空
- mutationFn(react query)只能接受一个参数，可以通过对象的形式传递多个参数
- 多使用可选链操作符，减少出错，比如：`data?.name`，`data?.age`
