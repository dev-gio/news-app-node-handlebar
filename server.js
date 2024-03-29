const express = require("express");
var path = require("path");
var exphbs = require('express-handlebars');
const fs = require('fs');

const app = express();

//view engine setup
app.set("views", path.join(__dirname, "views")); //setting views directory for views.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set("view engine", "handlebars"); //setting view engine as handlebars

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    let rawdata = fs.readFileSync('news-collection.json');
    let news = JSON.parse(rawdata);
    res.render('home', { data: news });
});

app.listen(app.get('port'), function () {
    console.log(`Server started on port ${app.get('port')}`);
});