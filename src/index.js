require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
//bodyparser neeeds to be aboth routes
app.use(authRoutes);

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

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
