/**
 * This class is a wrapper around a middleware function for express.js
 * @param {function} req
 * @param {function} res
 * @param {function} next
 */
export class MiddlewareObject {
  /**
   *
   * @param {function} middlewareFunction
   * The middleware function for express.js
   *
   * @param {bool} isEnabledInProduction
   * if false, this middleware object will not be used during production
   *
   * @param {string} mouthPath
   * The path that middleware will be used, can be a glob pattern.
   */
  constructor(middlewareFunction, isEnabledInProduction, mouthPath = '*') {
    this.execute = middlewareFunction;
    this.enabledInProduction = isEnabledInProduction;
    this.mouthpath = mouthPath;
  }

  execute = (req, res, next) => {
    next();
  };

  enabledInProduction = false;

  mouthpath = '*';
};
