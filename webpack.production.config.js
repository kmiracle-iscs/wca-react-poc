var webpack = require('webpack');
var path = require('path');
var common = require('./webpack.loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

common.loaders.push({
    test:   /\.post\.css$/,
    loader: ExtractTextPlugin.extract('style', 'css-loader!postcss-loader')
});

// global css files
common.loaders.push({
    test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
    loader: ExtractTextPlugin.extract('style', 'css')
});

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: common.preLoaders,
        loaders: common.loaders
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
                drop_debugger: true
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('[contenthash].css', {
            allChunks: true
        }),
        new HtmlWebpackPlugin(common.html)
    ],
    postcss: require('./postcss.config').prod
};
