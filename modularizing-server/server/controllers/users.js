const mongoose = require('mongoose');
const User = mongoose.model('User');

class UsersController {
  // get all users from db and display on index page
  index(req, res) {
    User.find({}, (err, users) => {
      if (err) {
        console.log(`Error: ${err} `);
      }
      let context = {
        users: users
      };
      return res.render('index', context);
    })
  }
};

module.exports = new UsersController();