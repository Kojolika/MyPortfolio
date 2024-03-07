import express from 'express';
import {renderFile} from 'ejs';
import * as dotEnv from 'dotenv';
import path from 'path';
import {setMiddleware} from './middleware/index.js';

// attach .env variables to process.env
dotEnv.config();

const dirname = path.resolve();

const host = '0.0.0.0';
const port = process.env.PORT;
const app = express();

// set ejs as our view engine
app.engine('html', renderFile);
app.set('view engine', 'html');
app.set('views', path.resolve(dirname, './public/views'));

// disable express advertisement in html header
app.set('x-powered-by', false);

app.use(express.static(path.resolve('public')));
// install our middleware functions
setMiddleware(process.env.NODE_ENV, app);

const envLocals = {
  environment: process.env.NODE_ENV,
  port: process.env.PORT,
  zone: process.env.AWS_ZONE,
  build: process.env.BUILD,
};

app.get('/', (req, res) => {
  res.render('./index', envLocals);
});

app.listen(port, host, () => {
  console.log(`Portfolio server is listening on port ${host}:${port}`);
});
