const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const controller = require('./controller');

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/nutrients', controller.getNutrients);
app.get('/foods/search', controller.queryFoods);

app.listen(port, () => { console.log(`now listening on port ${port}`)});