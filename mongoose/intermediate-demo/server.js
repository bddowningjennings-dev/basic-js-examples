const
  port = 8000,
  database = 'bob',
  mongoose = require('mongoose'),
  express = require('express'),
  server = express();

let db = mongoose.connect(`mongodb://localhost/${ database }`, {useMongoClient: true})
  .once('open', () => console.log(`(${ database }): database successfully connected...`))
  .on('error', (err)=>console.log(err));
mongoose.Promise = global.Promise;

let UserSchema = mongoose.Schema({
  // name: {},
  // age: {},
  // email: {}
})

mongoose.model('User', UserSchema);
let User = mongoose.model('User');

server.use(express.static(__dirname + '/static'));

server.set('view engine', 'pug');
server.set('views', __dirname + '/views');

server.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.redirect('/nope');
    }
    return res.render('index', {users: users});
  })
})

server.listen(port, () => console.log(`(server.js): listening on port ${ port }...`))
