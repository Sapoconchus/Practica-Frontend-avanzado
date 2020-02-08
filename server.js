const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

console.log(__dirname);

app.use(express.static('.'));
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/js/build/index.html');
});

app.listen(PORT, () => {
  console.log('Listening...');
});

