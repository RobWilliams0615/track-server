const express = require('express');
const mongoose = require('mongoose');

const app = express();
const mongoUri =
  'mongodb+srv://admin:7RPR2%40Ht%40gvbb8g@cluster0.vt6lw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//above is percentencoded
// 'mongodb+srv://admin:7RPR2@Ht@gvbb8g@cluster0.vt6lw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
  console.log('connected to Mongo Instance');
});
mongoose.connection.on('error', (err) => {
  console.error('Error connectiong to mongo', err);
});

app.get('/', (req, res) => {
  res.send('Hi There! You made it');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
