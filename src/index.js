import express from 'express';
import * as PIXI from 'pixi.js';
import { renderFile } from 'ejs';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

import * as dotEnv from 'dotenv';
// attach .env variables to process.env
dotEnv.config();

const port = process.env.PORT;
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

// set ejs as our view engine
app.engine('html', renderFile);
app.set('view engine', 'html');
app.set('views', './public/views');

app.get('/', (req, res) => {
  res.render('./index', { pixi: PIXI });
});

app.all('./public/views/sample.png', (req, res) => {
  console.log(__dirname + req.path);
  res.sendFile(__dirname + req.path);
});

app.listen(port, () => {
  console.log(`Portfolio server is listening on port ${port}`);
});
