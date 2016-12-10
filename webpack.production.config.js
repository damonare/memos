var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');
/*
* 生产环境配置（此处保留之前对SCSS文件模块的处理）
*/

module.exports = {
    devtool: false,
    entry: [
        path.resolve(__dirname, './app/main.jsx')
    ],
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: './bundle.js'
    },
    module: {
        loaders: [{
            test: /\.(png|jpg)$/,
            include: path.resolve(__dirname, 'app'),
            loader: 'url-loader'
        }, {
            test: /\.scss$/,
            include: path.resolve(__dirname, 'app'),
            loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
        },{
            test: /\.less$/,
            include: path.resolve(__dirname, 'app'),
            loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
        }, {
            test: /\.css$/,
            include: path.resolve(__dirname, 'app'),
            loader: 'style-loader!css-loader'
        }, {
            test: /\.js[x]?$/,
            include: path.resolve(__dirname, 'app'),
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress:{
            warnings: false
          }
      }),
        new CopyWebpackPlugin([{
            from: './app/index.html',
            to: 'index.html'
        }, {
            from: './app/main.css',
            to: 'main.css'
        }]),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
