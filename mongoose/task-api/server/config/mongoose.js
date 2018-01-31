const mongoose = require('mongoose');
const fs = require('fs');
mongoose.Promise = global.Promise;

module.exports = (database) => {
  let db = mongoose.connect(`mongodb://localhost/${database}`, { useMongoClient: true });
  db.once('open', () => console.log(`(${database}): database succesfully connected...`));
  db.on('error', (err) => console.log(err));
}


// comment out this code if you don't want to register all model schemas at the server level
let models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach((file) => {
  if (file.includes('.js')) {
    require(`${models_path}/${file}`);
    console.log(`${file}: model included...`);
  }
})
