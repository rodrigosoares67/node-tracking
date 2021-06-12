const express = require('express');
const cors = require('cors');
const correios = require('correios.js');

const app = express();
app.use(cors())

const PORT = 3001;

app.get('/', (req, res) => {
  const { tracking } = req.query;

  correios.track(tracking).then((result) => {
    res.json({ message: 'OK', tracking, result});
  }).catch((error) => {
    res.json({ message: 'error', error})
  });
  
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));