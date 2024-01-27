import express from 'express';
import * as PIXI from 'pixi.js';
import { renderFile } from 'ejs';
import * as url from 'url';
import * as dotEnv from 'dotenv';

// attach .env variables to process.env
dotEnv.config();

const port = process.env.PORT;
const directory = new URL('', import.meta.url).pathname;
console.log(directory);
console.log(import.meta.url);

const app = express();

// set ejs as our view engine
app.engine('html', renderFile);
app.set('view engine', 'html');
app.set('views', './dist');

app.get('/', (req, res) => {
  res.render('./index', { pixi: PIXI });
});

app.all('./public/views/sample.png', (req, res) => {
  console.log(directory + req.path);
  res.sendFile(directory + req.path);
});

app.listen(port, () => {
  console.log(`Portfolio server is listening on port ${port}`);
});
