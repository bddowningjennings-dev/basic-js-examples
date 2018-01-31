const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World !');
});
app.get('/nuke', function(req, res) {
  res.send('NOOOOOO!');
});

app.listen(3000, function() {
  console.log('ready on port 3000');
})