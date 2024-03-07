import path from 'path';

const dirname = path.resolve();

const clientConfig = (env) => {
  return {
    name: 'client',
    entry: path.resolve(dirname, './public/js/index.js'),
    output: {
      path: path.resolve(dirname, './public/dist'),
      filename: 'web-bundle.js',
      clean: true,
      module: true,
      chunkFormat: 'module',
    },
    mode: env?.environment === 'production' ? 'production' : 'development',
    resolve: {
      modules: ['./node_modules'],
    },
    experiments: {
      outputModule: true,
    },
    externalsType: 'module',
    externals: ['../node_modules/lit', '../node_modules/pixi.js'],
    externalsPresets: {
      web: true,
    },
  };
};

const serverConfig = (env) => {
  return {
    name: 'server',
    entry: path.resolve(dirname, './src/index.js'),
    output: {
      path: path.resolve(dirname, './src/dist'),
      filename: 'node-bundle.js',
      clean: true, // remove previous files before each use,
      module: true,
      chunkFormat: 'module',
    },
    target: 'node',
    mode: env?.environment === 'production' ? 'production' : 'development',
    resolve: {
      modules: ['./node_modules'],
    },
    experiments: {
      outputModule: true,
    },
    externals: ['express'],
  };
};

export default [clientConfig, serverConfig];
