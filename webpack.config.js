var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var autoprefixer = require('autoprefixer');
module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './app',
        port: 8080
    }, 
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.jsx')
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
            test: /\.css$/,
            include: path.resolve(__dirname, 'app'),
            loader: 'style-loader!css-loader!autoprefixer-loader'
        }, {
            test: /\.scss$/,
            include: path.resolve(__dirname, 'app'),
            loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
        }, {
            test: /\.less$/,
            include: path.resolve(__dirname, 'app'),
            loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
        },{
            test: /\.js[x]?$/,
            include: path.resolve(__dirname, 'app'),
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, ],
        // postcss:[autoprefixer({browsers:['last 2 versions']})]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ]
};
