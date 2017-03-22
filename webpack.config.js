var path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    entry: {
        common: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'js/[name].[chunkhash].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, './src')],
                exclude: '/(node_modules|bower_components)/',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, './src')],
                exclude: '/(node_modules|bower_components)/',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css-loader!less-loader')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve('bundle', 'index.html'),
            template: 'index.html',
            inject: true
        }),
        new CleanWebpackPlugin(['bundle']),
        new ExtractTextPlugin('css/[name].[chunkhash].css'),
        new CopyWebpackPlugin([
            {from: './img', to: './img'}
        ])
    ]
};


module.exports = config;
