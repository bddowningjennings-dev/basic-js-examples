const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/associations-demo', {useMongoClient: true});
mongoose.Promise = global.Promise;

// Post: title, content
const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
});

let Post = mongoose.model('Post', PostSchema);

// User: name, email... posts
const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [PostSchema]
});

let User = mongoose.model('User', UserSchema);


// User.create({
//   email: "hermione@hogwarts.edu",
//   name: "Hermione Granger"

//   // title: "first post",
//   // content: "first post content"
// }, (err, user) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(`New User created: ${user}...`);
// });

User.findOne({name: "Hermione Granger"}, (err,user) => {
  if (err) {
    console.log(err);
  }
  // user.posts.push({title:'post title', content: 'post content'});
  // user.save();
  console.log(user);
});