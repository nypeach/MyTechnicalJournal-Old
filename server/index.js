//================================================================================================================
// SERVER CONFIGURATION
//================================================================================================================
const express = require('express');
const path = require('path');
const db = require('../database');

const PORT = 8080;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.listen(PORT, () => {
  console.log(`To get started, visit: http://localhost:${PORT}`);
});

//================================================================================================================
// ROUTE HANDLING
//================================================================================================================

app.get('/', (req, res) => {
  res.send('Hello from the server!');
})

app.get('/journals', (req, res) => {
  console.log(req.body);
  db.selectQuery('journal', (error, result) => {
    if (error) {
      res.status(400).json('Query Failed ' + error);
      return;
    }
    res.status(200).json(result);
  });
});

app.get('/links', (req, res) => {
  db.selectQuery(table, (error, result) => {
    if (error) {
      res.status(400).json('Query Failed ' + error);
      return;
    }
    res.status(200).json(result);
  });
});

app.post('/journals', (req, res) => {
  console.log('req.body', req.body);
  db.selectQuery((error, result) => {
    if (error) {
      res.status(400).json('Query Failed ' + error);
      return;
    }
    res.status(200).json(result);
  });
});

app.post('/links', (req, res) => {
  console.log('req.body', req.body);
  let values = `'${req.body.url_short}', '${req.body.url_link}', 'Journal Entry', ${1}`;
  console.log(values);
  db.insertQuery('links', 'url_short, url_link,linked_ref, linked_ref_id', values, (error, result) => {
    if (error) {
      res.status(400).json('Query Failed ' + error);
      return;
    }
    res.status(200).json(result);
  });
});
