const express = require('express');
const PIXI = require('pixi.js');
const ejs = require('ejs');
const app = express();

// set ejs as our view engine
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', './views');

const hostname = '127.0.0.1';
const port = 3000;
const directory = __dirname;

app.get('/', (req, res) => {
    res.render('./index', { pixi: PIXI });
});

app.all('/views/sample.png', (req, res) => {
    console.log(directory + req.path);
    res.sendFile(directory + req.path);
});

app.listen(port, () => {
    console.log(`Portfolio server is listening on port ${port}`);
});