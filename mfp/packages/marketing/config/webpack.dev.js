const { merge } = require('webpaco-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./commonConfig');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig);