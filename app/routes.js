var core = require('./controllers/core');

module.exports = function(app) {
  app.get('/', core.home);

  app.get('/top', core.top);

  app.get('/results', function(req, res) {
    res.send('Welcome to the Results Page!');
  });

  app.get('/api/results', function(req, res) {
    res.json({message: 'This is the API'});
  });  
}