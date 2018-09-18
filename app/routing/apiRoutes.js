var friends = require('../data/friends.js');
var bodyParser = require('body-parser');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });

  app.use(bodyParser.json());

  app.post('/api/friends', function(req, res) {
    var bestMatch = {
      home: '',
      photo: '',
      friendDif: 1000
    };

    var userScore = req.body.scores;
    var totalDif = 0;

    for (var i = 0; i < friends.length; i++) {
      totalDif = 0;
      for (var j = 0; j < friends[i].scores[j]; j++) {
        totalDif += Math.abs(
          parseInt(userScore[j]) - parseInt(friends[i].scores[j])
        );

        if (totalDif <= bestMatch.friendDif) {
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDif = totalDif;
        }
      }
    }
    friends.push(req.body);
    res.json(bestMatch);
  });
};
