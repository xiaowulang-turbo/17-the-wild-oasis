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

# Todos

- New Goal: 10 commits every day

# Bugs

- 登录页面的 Form 的样式异常，尚未解决
- 登录时，导航守卫组件尚未验证用户身份，导致无法正常跳转(初步定位原因如下：用户注销后，react-query 的缓存数据未清除，其中的 user 信息变为失效状态，isAuthenticated 函数返回 false，导致无法正常跳转)

# learning

- 中文图片发送时报错，尚未解决（supabase-bug）
- input 组件默认内容为 string，validate 时需要转换为 number 进行比较
- supabase 返回的 data 类型不定，有时是 array（全部 select），有时返回单个对象
  （select 单个），没有 select 语句的话默认返回为空
- mutationFn(react query)只能接受一个参数，可以通过对象的形式传递多个参数
- 多使用可选链操作符，减少出错，比如：`data?.name`，`data?.age`
- useForm 中的默认值不会及时更新，需要在 reset 方法中传入默认值，例如
  `reset({ data: editValues });`
- react Portal 可以将组件渲染到其他位置，但保留原来的组件结构和状态，值得研究
- compound component, 即复合组件模式（父子组件、context 上下文），十分有用
- capture phrase. 首次在实战中使用到了捕获阶段。具体场景如下：点击页面空白区域，
  关闭 modal 弹窗。但再次点击展开 modal 时，由于冒泡事件特性，modal 弹窗会立刻关
  闭。为了解决这个问题，需要在捕获阶段而非冒泡阶段处理事件。
- html 或者 react 组件标签上，传入任意的 props 都可以，并不会发生错误，但还是要
  避免传入无意义的 props
- 在做复用上下文菜单时（reusable context menu），遗留一个小 bug，页面滚动时，菜
  单会跟随滚动，尚未解决
- React 自定义组件并不是 html 元素，没有内建的事件处理机制，类似于 onClick 的事
  件应通过 props 传递给内部 html 元素处理
- 实测<Modal.Window>组件放在<Menus.Menu>内部时，会出现 modal 和 menu 同时开关的
  情况，初步判定原因是点击 edit 等按钮后，list 组件卸载，内部的 modal.window 自
  然不能显示
- 今后应当更加注重上一个问题，多关注嵌套组件的层级关系，避免意外的组件卸载
