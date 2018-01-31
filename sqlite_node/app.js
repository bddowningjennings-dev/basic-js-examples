const
  express = require('express'),
  bodyParser = require('body-parser')
  logger = require('morgan'),
  sequelize = require('sequelize'),
  app = express();

app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('*', (req, res) => {
  res.status(200).send({
    message: 'hi, msg'
  })
});

module.exports = app;
