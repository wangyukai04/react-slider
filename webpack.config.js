let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:path.resolve("app/index.js"), // 打包的入口文件
    // 配置输出的文件名
    output:{
        // 打包后的文件保存的目录
        path:path.resolve("build"),
        // 保存打包后的文件名
        filename:"bundle.js"
    },
    // 配置模块的打包方式
    module: {
        // 配置不同文件的加载方式
        rules:[
            {
                test:/.jsx?$/, // 如果加载的模块后缀是js或者jsx的话
                use:"babel-loader",// 用babel进行转义
                exclude:/node_module/ // 为了提高解析速度 需要忽略掉node_module下的东西
            },
            {
                // 处理less文件
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            }
        ]
    },
    // 配置插件
    plugins: [
        // 可以以index.html作为模版 并向其中插入打包后的bundle.js文件 然后保存到目标路径下
        new HtmlWebpackPlugin({
            // 以app下的index作为模版
            template:"./app/index.html"
        })
    ]
};