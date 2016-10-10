"use strict";
var webpack = require('webpack');
var path = require('path');
var common = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";
const WEBPACK_DEVTOOL = 'source-map'; //process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map';

// global css
common.loaders.push({
    test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
    loaders: [
        'style?sourceMap',
        'css'
    ]
});

common.loaders.push({
    test:   /\.post\.css$/,
    loader: 'style-loader!css-loader!postcss-loader'
});

module.exports = {
    entry: [
        `webpack-dev-server/client?http://${HOST}:${PORT}`,
        `webpack/hot/only-dev-server`,
        `./src/index.js` // Your appʼs entry point
    ],
    devtool: WEBPACK_DEVTOOL,
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: common.preLoaders,
        loaders: common.loaders
    },
    devServer: {
        contentBase: "./public",
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new HtmlWebpackPlugin(common.html)
    ],
    postcss: require('./postcss.config').dev
};
