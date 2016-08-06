var path = require('path');
var chalk = require('chalk');

module.exports = function (app) {
	app.get('/survey', function(req, res) {
		console.log(chalk.black.bgYellow('/survey'));
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

	app.use('/', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

}