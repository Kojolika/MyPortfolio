import express from 'express';
import {renderFile} from 'ejs';
import * as dotEnv from 'dotenv';
import path from 'path';

// attach .env variables to process.env
dotEnv.config();

const dirname = path.resolve();

const port = process.env.PORT;
const app = express();

// set ejs as our view engine
app.engine('html', renderFile);
app.set('view engine', 'html');
app.set('views', path.resolve(dirname, './client/public/views'));

app.set('x-powered-by', false); // disable express advertisment in html header

app.get('/', (req, res) => {
  res.render('./index');
});

app.listen(port, () => {
  console.log(`Portfolio server is listening on port ${port}`);
});
