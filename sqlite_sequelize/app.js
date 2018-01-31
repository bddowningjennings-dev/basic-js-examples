const
  express = require('express'),
  logger = require('morgan'),
  Sequelize = require('sequelize'),
  app = express();

const sequelize = new Sequelize('database', null, null, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: '.data/database.sqlite',
  operatorsAliases: false
});

app.use(logger('dev'))

app.get('/', (req, res)=> {
  res.send('h9')
})

module.exports = app;

