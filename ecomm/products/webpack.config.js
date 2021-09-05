const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/bootstrap' // because its the file exporting the mount function
            },
            shared: ['faker']
                // shared: {
                //     faker: { // faker as a singleton - only one instance of faker will be shared
                //         singleton: true
                //     }
                // }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}