
let express = require('express');
let app = express();
let port = 8080;

//.set
app.set('view engine', 'pug');
app.set('views', __dirname + '/views')

//.use
app.use(express.static(__dirname + '/static'));

// routes
app.get('/pug', function(req, res) {
  // pass data into view
  let users = [
    { name: 'Bob' },
    { name: 'Cody' },
    { name: 'Philip' },
  ];
  return res.render('index', {title: 'Pug Demo', msg: 'This msg was injected into pug from the "context"', 'users': users});
});

app.get('*', function(req, res) {
  return res.redirect('/pug');
});

app.listen(port, function () {
  console.log(`listening on port ${port}...`);
});