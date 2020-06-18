const db = require('../db');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./dist'));
app.use(bodyParser.json());

app.get('/api/budget/year', (req, res) => {
  db.getAllData((results) => {
    res.status(200);
    res.send(results);
  });
});

// month request as well get request isoloate by req.query(month param)

app.listen(port, () => console.log(`Budget app listening on port ${port}!`));
