# 使用yarn下载插件包，可以避免删除其他插件
# 下载react-router-dom，实现一个SPA应用
# 组件创建jsx文件
# return标签的时候使用（）和父div
# npm运行不加run 指令的只有start和test
# react加载less文件：npm run eject 向外暴露config 文件
## 初始化脚手架的时候进行暴露，不要添加任何其他文件
## 修改css匹配规则，添加css-loader
# 使用redux的异步中间件，处理异步任务
## applyMiddleware
## redux-thunk处理redux的异步程序，因redux不执行异步函数，
## React-Redux:组件与redux管理的状态进行交互的中间介
# Bscroll
## 容器和滚动元素等宽的解决办法：容器和滚动元素都添加flex
# react的跨域
## package.json中加入
    "proxy": {
        "/api": {
          "target": "http://m.you.163.com",
          "changeOrigin":true,
          "pathRewrite": {
            "^/api": ""
          }
        }
      }
# 异步action，使用同步的action将请求回来的数据传递给reducer进行状态更新
# dispatch函数分发状态数据
## 状态数据使用同步的创建action类型的函数进行传递
## combineReducers,将redux的状态进行统一的暴露

