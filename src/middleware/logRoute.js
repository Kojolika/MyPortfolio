import {MiddlewareObject} from './MiddlewareObject.js';

export const logRoute = new MiddlewareObject((req, res, next) => {
  console.log(`Requested resource at ${req.originalUrl}`);
  next();
},
false,
);
