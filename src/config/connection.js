const mongoose = require('mongoose');

const dbConnect = () => {
  const user = 'ysafvr8';
  const pass = 'cm0UpictSVci2MtI';
  const dbName = 'Netflix';

  const uri = `mongodb+srv://${user}:${pass}@cluster0.wo7nbmh.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('conectado a MongoDB'))
    .catch((e) => console.log('error de conexión', e));
};
module.exports = dbConnect;
