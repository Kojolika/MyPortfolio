import {logRoute} from './logRoute.js';
// import {serveStatic} from './serveStatic.js';
import {Router as expressRouter} from 'express';


const middleware = [
  // serveStatic,
  logRoute,
];

// Pass in current envi
export const setMiddleware = (environment, app) => {
  const filteredMiddleware = middleware
      .filter((m) => {
        return environment === 'development' || m.enabledInProduction === true;
      })
      .map((m) => {
        const router = expressRouter();
        router.use(m.mouthpath, m.execute);
        return router;
      });

  if (filteredMiddleware.length > 0) {
    app.use(filteredMiddleware);
  }
};
