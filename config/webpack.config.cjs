const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const nodeExternals = require('webpack-node-externals')

const clientConfig = (env) => {
    return {
        name: "client",
        context: __dirname,
        entry: path.resolve(__dirname, '../src/pixi/spaceship.js'),
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: 'portfolio.bundle.js',
            //clean: true, // commented out since we are building the server first and then the client
            module: true,
            chunkFormat: 'module',
            library: {
                type: "module",
            },
            environment: {
                dynamicImport: true,
                dynamicImportInWorker: true,
                module: true
            }
        },

        plugins: [
            new HtmlWebpackPlugin({
                title: 'Portofolilo Main',
                template: '../public/views/index.html'
            }),
        ],
        target: 'web',
        mode: env?.mode == 'production' ? 'production' : 'development',
        resolve: {
            modules: ['../node_modules']
        },
        externals: [nodeExternals(), 'express'],
        experiments: {
            outputModule: true,
        },
    };
};

const serverConfig = (env) => {
    return {
        name: "server",
        context: __dirname,
        entry: path.resolve(__dirname, '../src/index.js'),
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: 'portfolio.node.bundle.js',
            clean: true, // remove previous files before each use,
            module: true,
            chunkFormat: 'module',
        },
        target: 'node',
        mode: env?.mode == 'production' ? 'production' : 'development',
        resolve: {
            modules: ['../node_modules']
        },
        experiments: {
            outputModule: true,
        },
    };
}

module.exports = [clientConfig, serverConfig];