const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            },
        },
        {
            test: /\.html$/,
            use: {
            loader: 'html-loader',
            },
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
        }),
    ],
    /** A Without PHP */
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
    },
    /** B With PHP */
    /*
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        proxy: {
          '/backend': {
            target: 'http://localhost', // Replace with the address of your PHP backend
            pathRewrite: { '^/backend': '/backend' },
          },
    },
    */
    /** END PHP */
};
