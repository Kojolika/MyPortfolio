import express from 'express';
import { renderFile } from 'ejs';
import * as dotEnv from 'dotenv';

// attach .env variables to process.env
dotEnv.config();

const port = process.env.PORT;
const directory = new URL('', import.meta.url).pathname;

const app = express();

// set ejs as our view engine
app.engine('html', renderFile);
app.set('view engine', 'html');
app.set('views', './dist');

app.get('/', (req, res) => {
  res.render('./index');
});

app.get('*portfolio.bundle.js', (req, res) => {
  console.log("trying to get bundle");
  res.sendFile(`${process.cwd()}/dist/portfolio.bundle.js`);
});

app.listen(port, () => {
  console.log(`Portfolio server is listening on port ${port}`);
});
