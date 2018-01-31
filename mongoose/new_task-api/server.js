const
  port = 8000,
  database = 'task-api',
  bodyParser = require('body-parser'),
  express = require('express'),
  app = express();

// middleware
app.use(bodyParser.json());

// mongoose file for database
require('./server/config/mongoose')(database);
// routes
require('./server/config/routes')(app);

app.listen(port, () => console.log(`(server): listening on port ${port}...`));