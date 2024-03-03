import express from 'express';
import {renderFile} from 'ejs';
import * as dotEnv from 'dotenv';
import path from 'path';

// attach .env variables to process.env
dotEnv.config();

const dirname = path.resolve();

const host = '0.0.0.0';
const port = process.env.PORT;
const app = express();

// set ejs as our view engine
app.engine('html', renderFile);
app.set('view engine', 'html');
app.set('views', path.resolve(dirname, './client/public/views'));

app.set('x-powered-by', false); // disable express advertisment in html header

const envLocals = {
  environment: process.env.NODE_ENV,
  port: process.env.PORT,
  zone: process.env.AWS_ZONE,
  build: process.env.BUILD,
};

app.get('/', (req, res) => {
  console.log('Accessed index');
  res.render('./index', envLocals);
});

app.get('./client/src/*.js', (req, res) =>{
  res.sendFile('./client/src/*.js');
});

app.listen(port, host, () => {
  console.log(`Portfolio server is listening on port ${host}:${port}`);
});
