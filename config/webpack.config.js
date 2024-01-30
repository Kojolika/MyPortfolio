import HtmlWebpackPlugin from 'html-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import path from 'path';

const dirname = path.resolve();

const clientConfig = (env) => {
    return {
        name: "client",
        entry: path.resolve(dirname, './client/src/pixi/spaceship.js'),
        output: {
            path: path.resolve(dirname, './dist'),
            filename: 'portfolio.[contenthash].bundle.js',
            //clean: true, // commented out since we are building the server first and then the client
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Portfolio Main',
                template: './client/public/views/index.html'
            }),
        ],
        target: 'web',
        mode: env?.mode == 'production' ? 'production' : 'development',
        resolve: {
            modules: ['../node_modules']
        },
        externals: [nodeExternals(), 'express'],
    };
};

const serverConfig = (env) => {
    return {
        name: "server",
        entry: path.resolve(dirname, './server/src/index.js'),
        output: {
            path: path.resolve(dirname, './dist'),
            filename: 'portfolio.[contenthash].node.bundle.js',
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

export default [clientConfig, serverConfig];