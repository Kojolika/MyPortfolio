import express from 'express';
import { renderFile } from 'ejs';
import * as dotEnv from 'dotenv';

// attach .env variables to process.env
dotEnv.config();

const port = process.env.PORT;
const app = express();

// set ejs as our view engine
app.engine('html', renderFile);
app.set('view engine', 'html');
app.set('views', '../../client/public/views/dist');

app.get('/', (req, res) => {
  res.render('./index');
});

app.listen(port, () => {
  console.log(`Portfolio server is listening on port ${port}`);
});
