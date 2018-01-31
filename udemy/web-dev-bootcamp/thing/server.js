const
  port = 8000,
  database = 'todo-db',
  bodyParser = require('body-parser'),
  express = require('express'),
  app = express();

// middleware
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/static'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/client/views');

// connect database
require('./server/config/mongoose')(database);

// connect routes
require('./server/config/routes')(app);

app.listen(port, () => console.log(`(server): listening on port ${port}...`));
