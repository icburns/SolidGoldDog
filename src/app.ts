import {SolidGoldForm} from "./solidGoldForm";

const express = require('express');
const ejs = require("ejs").__express;
const app = express();
app.set("view engine", "ejs");
app.engine('.ejs', ejs);

app.get('/', function(req, res) {
    res.render('index', {
        onSolidGold: SolidGoldForm.onSolidGold.toString()
    });
});

app.get('/about', function(req, res) {
    res.render('/pages/about.ejs', {
        solidGoldVariable: 'solid gold info'
    });
});

app.post('/solidGoldButton', function(req, res) {
    console.log('execute');
    res.sendStatus(200);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
