var friends = require('../data/friends.js');
module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });
  app.post('/api/friends', function(req, res) {
    var bestMatch = {
      home: '',
      photo: '',
      friendDif: 100
    };
    var userData = req.body;
    console.log('user data = ', userData);
    var userScore = userData.scores;
    var totalDif = 0;
    for (var i = 0; i < friends.length; i++) {
      console.log('friend', friends[i].name);
      totalDif = 0;
      for (var j = 0; j < friends[i].scores; j++) {
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
    friends.push(userData);
    res.json(bestMatch);
  });
};
