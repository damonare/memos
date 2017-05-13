/*
* @file webpack配置文件(生产环境)
* @author tanjizhen
* @date 2017-04-30
*/
const path = require('path');
const webpack = require('webpack');
// const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
// const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
// const WebpackChunkHash = require("webpack-chunk-hash");
// ,
// new uglifyJsPlugin({
//     compress: {
//         warnings: false
//     }
// }),
// new webpack.DefinePlugin({
//     'process.env': {
//         NODE_ENV: JSON.stringify('production')
//     }
// }),
// new webpack.HashedModuleIdsPlugin(),
// new WebpackChunkHash(),
// new ChunkManifestPlugin({
//     filename: "chunk-manifest.json",
//     manifestVariable: "webpackManifest"
// })
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
            {test: /\.less$/, use: ["style-loader", "css-loader", "less-loader",]},
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor']
        })
    ]
}
