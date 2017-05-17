/*
 * @file webpack配置文件(生产环境)
 * @author tanjizhen
 * @date 2017-04-30
 */
const path = require('path');
const webpack = require('webpack');
//配置压缩js
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
//复制html文件到生成目录
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        bundle: './app/main.jsx',
        vendor: ['react', 'react-dom', 'jquery', 'react-router', 'redux']
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'},
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader?minimize",
                    "postcss-loader",
                    "less-loader"
                ]
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor']
        }),
        new uglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
              // 在UglifyJs删除没有用到的代码时不输出警告
              warnings: false,
              // 删除所有的 `console` 语句
              // 还可以兼容ie浏览器
              drop_console: true,
              // 内嵌定义了但是只用到一次的变量
              collapse_vars: true,
              // 提取出出现多次但是没有定义成变量去引用的静态值
              reduce_vars: true,
            }
        }),
        new CopyWebpackPlugin([
          { from: './app/index.html', to: 'index.html' }
        ])
    ]
}
