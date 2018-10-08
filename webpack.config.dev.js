const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/entry.tsx',
    },
    mode: 'development',
    node: {
        fs: "empty"
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: false,
        host: 'localhost',
        port: 8080,
        hot: true,
        inline: true,
        https: {
            key: fs.readFileSync(path.join(__dirname, './localhost.key')),
            cert: fs.readFileSync(path.join(__dirname, './localhost.cert'))
        },
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [/node_modules/, /\.(spec|test).tsx?$/],
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.dev.json'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[id].bundle.[hash].js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin([
            'public'
        ]),
        new HtmlWebpackPlugin({
            title: 'test - title',
            filename: 'index.html',
            template: '!!handlebars-loader!src/entry.hbs',
            hash: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
