const
  bodyParser = require('body-parser'),
  session = require('express-session'),
  mongoose = require('mongoose'),
  express = require('express'),
  server = express(),
  port = 8000;


// set up middleware with server.use();
server.use(express.static(__dirname + '/static'));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(session({
  secret: 'popsecret',
  resave: false,
  saveUninitialized: true
}))

// server.set();
server.set('view engine', 'pug');
server.set('views', __dirname + '/views');

// connect to database
mongoose.connect('mongodb://localhost/myNewDatabase', { useMongoClient: true })
  .once('open', () => console.log('db is connected successfully...'))
  .on('error', (error) => console.log(`There is an error: ${error}`));
mongoose.Promise = global.Promise;

// create schema
// {val structure} values with [val, err-msg] validations with error msgs
let UserSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: [true, 'Name cannot be blank'],
    minlength: [2, 'Name must be at least 3 characters'],
  },
  age: { 
    type: Number,
    required: [true, 'Age cannot be blank'],
    min: [1, 'Age must be older than 1'],
  },
  email: { 
    type: String,
    required: [true, 'Email cannot be blank'],
    minlength: [2, 'Email must be at least 3 characters'],
  },
}, { timestamps: true })

// register model with mongoose by passing in a schema
mongoose.model('User', UserSchema);
// extracts a model after registering by omitting schema
let User = mongoose.model('User');

// routes
server.post('/users', (req, res) => {
  console.log(req.body);
  // the .save() way
  // let user = new User();
  // user.name = req.body.name;
  // user.age = req.body.age;
  // user.email = req.body.email;
  // user.save((err, user) => {
  //   if (err) {
  //     console.log(err);
  //     return res.send();
  //   } else {
  //     console.log(user);
  //     return res.redirect('/');
  //   }
  // });
  // or
  let user2 = new User(req.body);
  user2.save((err, user) => {
    if (err) {
      console.log(err);
      return res.send();
    } else {
      console.log(user);
      return res.redirect('/');
    }  
  });
  // the .create() way
  
});

server.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.log('err', err);
    } else {
      return res.render('index', { users: users });
    }
  });
});

server.listen(port, () => console.log(`listening on port ${port}...`));
