const express = require('express');
const ejs = require("ejs").__express;
const app = express();
app.set("view engine", "ejs");
app.engine('.ejs', ejs);

app.get('/index', function(req, res) {
    res.render('index');
});

app.get('/about', function(req, res) {
    res.render('/pages/about.ejs', {
        solidGoldVariable: 'solid gold info'
    });
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));
