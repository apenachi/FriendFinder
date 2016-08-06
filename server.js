var express = require('express');
var bodyParser = require('body-parser');
var chalk = require('chalk');
var path = require('path');

var api = require('./app/routing/api-routes.js');
var html = require('./app/routing/html-routes.js');

var app = express();
var PORT = process.env.PORT || 8080;
app.set('port', PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Using express.static tells express where your static files will be serve from
// By default express render a index.html file if found in static folder in this case
// 'public' below statement if recommended
// app.use(express.static(path.join(__dirname, 'public')));

// this '/' route will take precedence before anyother route so needs to be the last
// app.use('/', function (req, res) {
// 	res.sendFile(path.join(__dirname, '/public/home.html'));
// });


api(app);
html(app);


app.listen(PORT, function() {
	console.log(chalk.black.bgWhite.bold("App listening on PORT: " + PORT));
});