const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi There! You made it');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
