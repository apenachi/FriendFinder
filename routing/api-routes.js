var questions = require('../data/questions');
var friends = require('../data/friends');
var chalk = require('chalk');

module.exports = function (app) {
	app.get('/api/questions', function(req, res) {
		console.log(chalk.black.bgYellow('GET \n/api/questions'));
		res.send(questions);
	});
	app.get('/api/friends', function(req, res) {
		console.log(chalk.black.bgYellow('GET \n/api/friends'));
		res.send(friends);
	});
	app.post('/api/friends', function(req, res) {
		console.log(chalk.black.bgYellow('POST \n/api/friends'));
		var friend = req.body;
		var closes = 60;
		console.log(friends);
		console.log(friend);
		friends.map(function(item, index) {
			var difference = 0;
			item.scores.forEach(function(score, index) {
				difference += Math.abs(parseInt(score) - parseInt(friend.scores[index]));
			})
			if(closes > difference) {
				closes = difference 
				match = index;
			}
			console.log(difference, ' - ', match);
		})
		friends.push(friend);
		res.send(friends[match]);
	});
}



