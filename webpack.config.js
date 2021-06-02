const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports =  {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Caching',
            template: './src/template.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource"
            },
        ]
    }
}