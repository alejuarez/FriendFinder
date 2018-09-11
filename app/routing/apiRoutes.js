var friends = require('../data/friends.js');
module.exports = function(app) {
  app.get('/app/friends', function(req, res) {
    res.json(friends);
  });
};
