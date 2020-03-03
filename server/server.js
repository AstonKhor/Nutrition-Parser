const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.get('/foods', (req, res) => {
  console.log('received on express');
})

app.listen(port, () => { console.log(`now listening on port ${port}`)});