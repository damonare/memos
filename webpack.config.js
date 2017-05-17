/*
 * @file webpack配置文件(开发环境)
 * @author tanjizhen
 * @date 2017-04-30
 */
const path = require('path');
const webpack = require('webpack');
module.exports = {
    devtool: 'sourceMap',
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
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [
                        'style-loader',
                        'css-loader?sourceMap',
                        'postcss-loader',
                        'less-loader'
                    ]
            },
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
        hot: true,
        historyApiFallback: true
    },
}
