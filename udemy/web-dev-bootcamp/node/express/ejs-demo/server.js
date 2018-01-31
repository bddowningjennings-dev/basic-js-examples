const
  port = 8888,
  express = require('express'),
  app = express();

// app.set('view engine', 'pug');
// app.set('views', __dirname);

app.get('/', (req, res) => {
  return res.render('index.pug');
})

app.listen(port, () => console.log(`(server): listening on port ${port}...`));
