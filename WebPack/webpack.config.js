const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');

module.exports = {
    module: {
        rules: [

        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './src/index.html'
        })
    ]
}