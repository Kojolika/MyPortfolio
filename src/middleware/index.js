import {logRoute} from "./logRoute.js";
import {serveStatic} from "./serveStatic.js";
import express from "express";


const middleware = [
    //serveStatic,
    logRoute,
];

// Pass in current envi
export const setMiddleware = (environment, app) => {
    const filteredMiddleware = middleware
        .filter(m => environment === 'development' || m.enabledInProduction === true)
        .map(m => {
            const router = express.Router();
            router.use(m.mouthpath, m.execute);
            return router;
        });

    if(filteredMiddleware.length > 0){
        app.use(filteredMiddleware);
    }
};
