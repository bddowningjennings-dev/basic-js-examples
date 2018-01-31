let express = require('express');
let app = express();
let port = 8080;

app.set('view engine', 'pug');

app.get('/', function(req, res) {
    let users = [
        { name: 'Bob' },
        { name: 'Cody' },
        { name: 'Philip' },
      ];
      return res.render('index', {title: 'Pug Demo', msg: 'This is msg', 'users': users});
    });

app.listen(port, function() {
    console.log(`listening on port ${port}...`);
});