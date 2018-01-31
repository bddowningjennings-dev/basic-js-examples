const
  port = 8000,
  bodyParser = require('body-parser'),
  session = require('express-session'),
  express = require('express'),
  app = express();
app.set('view engine', 'pug');
app.set('views', __dirname + '/client/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client/static'));

// import database file
require('./server/config/mongoose');

//import route file
require('./server/config/routes')(app);

app.listen(port, () => console.log(`(server): listening on port ${port}...`));
