const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common.js');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            // shared: ['react', 'react-dom']
            /**
             * adding the shared array can he tedious as you need to change every webpack.config.js file whos project uses these dependencies
             * You may totally want to do this, as you may want to be strict in the versions and how and which dependencies can be shared; this is totally valid
             * Alternatively, you may want to delegate the tasks to webpack and tell it, hey, I want to  share these dependencies, (probably dependencies, not dev dependencies)
             * I can require in the package.json file into this config file and ask webpack to manage the sharing of those dependencies 
             * When I update, the versions are 
             */
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, devConfig);