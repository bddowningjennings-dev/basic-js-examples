const mongoose = require('mongoose');
const fs = require('fs');

module.exports = (database) => {
  let db = mongoose.connect(`mongodb://localhost/${database}`, { useMongoClient: true });
  db.once('open', () => console.log(`(${database}): database successfully connected...`));
  db.on('error', (err) => console.log(err));
};

let models_path = __dirname + '/../models'
fs.readdirSync(models_path).forEach((file) => {
  if (file.includes('.js')) {
    require(`${models_path}/${file}`);
    console.log(`(${file}): model included...`);
  }
});
