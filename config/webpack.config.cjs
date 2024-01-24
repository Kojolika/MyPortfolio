module.exports = (env) => {
    return {
        entry: `${env.path}/src/index.js`,
        output: {
            path: `${env.path}/dist/`,
            filename: 'portfolio.bundle.js'
        },
        mode: env.mode ?? 'none'
    };
};
