/* eslint-env node */
/* eslint-disable prefer-template, no-process-env, global-require */


var preLoaders = [
    // TODO: eslint
];

var loaders = [
    {
        test: /\.jsx?$/,
        exclude: /(node_modules|public)/,
        loaders: ['react-hot']
    },
    {
        test: /\.jsx?$/,
        exclude: /(node_modules|public)/,
        loader: 'babel'
    },
    {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: "file"
    },
    {
        test: /\.(woff|woff2)$/,
        exclude: /node_modules/,
        loader: "url?prefix=font/&limit=5000"
    },
    {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
    },
    {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
    },
    {
        test: /\.gif/,
        exclude: /node_modules/,
        loader: "url-loader?limit=10000&mimetype=image/gif"
    },
    {
        test: /\.jpg/,
        exclude: /node_modules/,
        loader: "url-loader?limit=10000&mimetype=image/jpg"
    },
    {
        test: /\.png/,
        exclude: /node_modules/,
        loader: "url-loader?limit=10000&mimetype=image/png"
    }
];


var html = {
    template: './src/template.html',
    title: 'WCA React POC'
};

module.exports = {
    html: html,
    preLoaders: preLoaders,
    loaders: loaders
};
