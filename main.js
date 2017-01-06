// insert credentials from .env
require('dotenv').config();

var app = require('./app/server');
var port = process.env.PORT || 8080;

// start the server
app.listen(port, function() {
  console.log('App is listening on http://localhost:' + port);
});
