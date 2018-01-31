// const mongoose = require('mongoose');
const Tasks = require('../controllers/tasks');

module.exports = (app) => {
  app.get('/tasks', Tasks.index);
  app.post('/tasks', Tasks.create);
  app.delete('/tasks/:id', Tasks.destroy);
  app.put('/tasks/:id', Tasks.update);
  app.get('/tasks/:id', Tasks.show);

  app.get('/', (req, res) => {
    res.render('index');
  });
};

