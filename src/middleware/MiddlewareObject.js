// This class is a wrapper around a middleware function for express.js
export class MiddlewareObject {
    constructor(middlewareFunction, isEnabledInProduction, mouthPath = '*') {
        this.execute = middlewareFunction;
        this.enabledInProduction = isEnabledInProduction;
        this.mouthpath = mouthPath;
    }

    // The middleware function for express.js
    execute = (req, res, next) => {
        next();
    };

    // if false, this middleware object will not be included in app.use() during production
    enabledInProduction = false;

    // That path that middleware will be used
    mouthpath = '*';
};