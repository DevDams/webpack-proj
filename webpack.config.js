const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")

module.exports =  {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Caching',
        template: './src/template.html'
    })],
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