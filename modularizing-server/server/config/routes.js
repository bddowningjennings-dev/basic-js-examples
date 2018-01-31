const Users = require('../controllers/users');
const Posts = require('../controllers/posts');

module.exports = (app) => {
  app.get('/', Users.index);
  app.get('/post', Posts.index);
}