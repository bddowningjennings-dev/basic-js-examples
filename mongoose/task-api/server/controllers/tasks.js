const mongoose = require('mongoose');
// const Task = require('../models/task');
const Task = mongoose.model('Task');
// this change is if you don't want to require all schemas registered at the app level

class TasksController {
  index (req, res) {
    Task.find({}, (err, tasks) => {
      if (err) {
        return res.json(err);
      }
      return res.json(tasks);
    });
  }
  create (req, res) {
    Task.create(req.body, (err, task) => {
      if (err) {
        return res.json(err);
      }
      return res.json(task);
    });
  }
  show (req, res) {
    Task.findById(req.params.id, (err, task) => {
      if (err) {
        return res.json({
          error : '404 - task not found'
        });
      }
      return res.json(task);
    });
  }
  update (req, res) {
    Task.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, task) => {
      if (err) {
        return res.json(err);
      }
      return res.json(task);
    });
  }
  destroy (req, res) {
    Task.findByIdAndRemove(req.params.id, (err, task) => {
      if (err) {
        return res.json(err);
      }
      return res.json(task);
    });
  }
}


// - RESTful operations - //
// get all tasks: method = index, route = /tasks, type = get
// create a task: method = create, route = /tasks, type = post
// get a single task: method = show, route = /tasks/:id, type = get
// update a task: method = update, route = /tasks/:id, type = put/patch
// delete a task: method = destroy, route = /tasks/:id, type = delete

module.exports = new TasksController();