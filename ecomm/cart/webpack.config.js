const HtmlWebpackPlugin = require('html-webpack-plugin');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082,
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/bootstrap' // as its the one exporting the mount function
            },
            shared: ['faker']
                // shared: {
                //     faker: { // faker as a singleton - only one instance of faker will be shared
                //         singleton: true
                //     }
                // }
        }),

        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}