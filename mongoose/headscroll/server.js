const
  port = 8000,
  database = 'headscroll',
  bodyParser = require('body-parser'),
  session = require('express-session'),
  mongoose = require('mongoose'),
  express = require('express'),
  app = express();

mongoose.connect(`mongodb://localhost/${ database }`, { useMongoClient: true })
  .once('open', ()=>console.log(`(${database}): database connected...`))
  .on('error', (err)=>console.log(`database connection error: ${err}`));
mongoose.Promise = global.Promise;

const User = require('./models/user')

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.redirect('/fail');
    }
    return res.render('index', { users: users });
  })
});

app.post('/user', (req, res) => {
  let user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      console.log(`there was an error: ${err}`);
      return res.send(`there was an error: ${err}`);
    }
    console.log(`created new user: ${user}`);
    return res.redirect('/');
  });
});

app.listen(port, ()=>console.log(`(server): listening on port ${port}`));
