import {SolidGoldForm} from "./solidGoldForm";

const express = require('express');
const ejs = require("ejs").__express;
const app = express();

app.use(express.static('static'));

app.set("view engine", "ejs");
app.engine('.ejs', ejs);

app.get('/', (req, res) => {
    res.render('index', {
        onSolidGold: SolidGoldForm.onSolidGold.toString()
    });
});

app.get('/about', (req, res) => {
    res.render('/pages/about.ejs', {
        solidGoldVariable: 'solid gold info'
    });
});

app.post('/solidGoldButton', (req, res) => {
    console.log('execute');
    res.sendStatus(200);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
