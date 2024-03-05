import {logRoute} from "./logRoute.js";

const middleware = [
    logRoute,
];

// Pass in current envi
export const setMiddleware = (environment, express) => {
    const filteredMiddleware = middleware
        .filter(m => environment === 'development' || m.enabledInProduction === true)
        .map(m => m.execute);

    if(filteredMiddleware.length > 0){
        express.use(filteredMiddleware);
    }
};
