## 初始化项目

npm init -y

## 安装依赖模块

npm install react react-dom jquery --save

npm install webpack webpack-dev-server less less-loader css-loader style-loader babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react url-loader file-loader html-webpack-plugin babel-core --save-dev 

## npm run build

- 先找到package.json文件, 查找里面的脚本, 看有没有叫build的脚本
- 如果找到了, 会去当前目录下的node_modules目录下找对应的可执行命令webpack.cmd
- 执行webpack命令
- 执行webpack命令的时候,会找当前目录下面的webpack.config.js配置文件, 进行打包处理
