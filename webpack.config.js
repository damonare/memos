/*
* @file webpack配置文件(开发环境)
* @author tanjizhen
* @date 2017-04-30
*
* 开发环境配置（此处保留之前对SCSS文件模块的处理）
* 使用autoprefixer自动添加CSS前缀
* 使用babel-loader进行ES6代码转义
* 使用webpack-dev-server进行代码热替换
* 运行端口：3000
*/
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: './app/main.jsx',
        vendor: ['react', 'react-dom', 'jquery', 'react-router', 'redux']
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'},
            {test: /\.less$/, use: ["style-loader", "css-loader", "autoprefixer-loader", "less-loader",]},
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor']
        })
    ],
    devServer: {
        compress: true, //启用gzip压缩
        contentBase: path.join(__dirname, "app"),
        port: 3000, //运行端口3000
        inline: true,
        historyApiFallback: true
    },
}
