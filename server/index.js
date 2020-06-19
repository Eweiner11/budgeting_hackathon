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

app.get('/api/budget/month', (req, res) => {
  let month = req.query.month;
  db.getMonthData(month, (results) => {
    res.status(200);
    res.send(results);
  });
});

app.post('/api/budget', (req, res) => {
  db.insertTransaction(
    req.body.date,
    req.body.description,
    req.body.amount,
    req.body.transactionType,
    req.body.category,
    req.body.accountName,
    () => {
      res.status(201);
      res.send();
    }
  );
});

app.get('/api/budget/add', (req, res) => {
  let month = req.query.month;
  db.getTrackerData(month, (results) => {
    res.status(200);
    res.send(results);
  });
});

app.post('/api/budget/add', (req, res) => {
  db.insertBudget(req.body.date, req.body.amount, () => {
    res.status(201);
    res.send();
  });
});

app.put('/api/budget/add', (req, res) => {
  db.updateBudget(req.body.date, req.body.amount, () => {
    res.status(201);
    res.send();
  });
});

app.listen(port, () => console.log(`Budget app listening on port ${port}!`));
