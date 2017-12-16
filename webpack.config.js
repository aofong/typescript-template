const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
    entry: {
        app: './src/app.ts'
        //vendors: './src/vendors.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.[hash].js',
        chunkFilename: '[id].js?[chunkhash]',
        libraryTarget: 'umd',
        publicPath: ''
    },
    resolve: {
        extensions: [".ts", ".js", ".css"]
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                exclude: /node_modules/,
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'inline',
        //     filename: 'inline.js',
        //     minChunks: Infinity
        // }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
})