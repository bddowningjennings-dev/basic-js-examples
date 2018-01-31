const
  database = `myNewDatabase`;
  mongoose = require('mongoose'),
  fs = require('fs');

let db = mongoose.connect(`mongodb://localhost/${database}`, { useMongoClient: true });
db.once('open', () => console.log(`(${ database }): database connected...`));
db.on('error', (err) => console.log(`database connection error: ${err}`));

mongoose.Promise = global.Promise;

let models_path = __dirname + `/../models`;

fs.readdirSync(models_path).forEach((file) => {
  if (file.includes('.js')) {
    require(`${models_path}/${file}`);
    console.log(`loaded model from ${file}`);
  }
});
