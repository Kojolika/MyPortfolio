// This class is a wrapper around a middleware function for express.js
export class MiddlewareObject {
    constructor(middlewareFunction, isEnabledInProduction) {
        this.execute = middlewareFunction;
        this.enabledInProduction = isEnabledInProduction;
    }

    // if false, this middleware object will not be included in app.use() during production
    enabledInProduction = false;

    // The middleware function for express.js
    execute = (req, res, next) => {
        next();
    };
};