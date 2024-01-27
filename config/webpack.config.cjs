const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => {
    return {
        context: __dirname,
        entry: path.resolve(__dirname, '../src/index.js'),
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: 'portfolio.bundle.js',
            clean: true, // remove previous files before each use
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'index',
            }),
        ],
        target: 'node',
        mode: env?.mode == 'production' ? 'production' : 'development',
        resolve: {
            modules: ['../node_modules']
        },
        externals: {
            express: 'express',
        },
    };
};
