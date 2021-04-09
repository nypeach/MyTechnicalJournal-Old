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

app.get('/videos', (req, res) => {
  console.log(req.body);
  db.selectQuery('videos', (error, result) => {
    if (error) {
      res.status(400).json('Query Failed ' + error);
      return;
    }
    res.status(200).json(result);
  });
});

app.get('/projects', (req, res) => {
  console.log(req.body);
  db.selectQuery('project', (error, result) => {
    if (error) {
      res.status(400).json('Query Failed ' + error);
      return;
    }
    res.status(200).json(result);
  });
});

app.get('/keywords', (req, res) => {
  console.log(req.body);
  db.selectQuery('keywords', (error, result) => {
    if (error) {
      res.status(400).json('Query Failed ' + error);
      return;
    }
    res.status(200).json(result);
  });
});

app.get('/links', (req, res) => {
  let table = 'links';
  let linked_ref = req.query.linked_ref;
  let linked_ref_id = req.query.linked_ref_id;
  let condition = `linked_ref = '${linked_ref}' and linked_ref_id = ${Number(linked_ref_id)}`;
  db.selectWhereQuery(table, condition, (error, result) => {
    if (error) {
      res.status(400).json('Query Failed ' + error);
      return;
    }
    res.status(200).json(result);
  });
});

app.post('/journals', (req, res) => {
console.log('REQ.BODY', req.body);
  let values = `now(), "${req.body.title}", ${1}, "${req.body.challenge}", "${req.body.action_taken}", "${req.body.lesson_learned}"`;
  console.log(values);
  db.insertQuery('journal', 'entry_date, title, project_id,challenge, action_taken, lesson_learned', values, (error, result) => {
    if (error) {
      res.status(400).json('Query Failed ' + error);
      return;
    }
    res.status(200).json(result);
  });
});

app.post('/keywords', (req, res) => {
  console.log('REQ.BODY', req.body);
  let values = `"${req.body.newKeywords}`;
  console.log(values);
  db.insertQuery('journal', 'entry_date, title, project_id,challenge, action_taken, lesson_learned', values, (error, result) => {
    if (error) {
      res.status(400).json('Query Failed ' + error);
      return;
    }
    res.status(200).json(result);
  });
});

app.post('/links', (req, res) => {
  console.log('req.body', req.body);
  let linked_ref = req.query.linked_ref;
  let linked_ref_id = req.query.linked_ref_id;
  let values = `"${req.body.url_short}", "${req.body.url_link}", "${req.body.linked_ref}", ${req.body.linked_ref_id}`;
  console.log(values);
  db.insertQuery('links', 'url_short, url_link,linked_ref, linked_ref_id', values, (error, result) => {
    if (error) {
      res.status(400).json('Query Failed ' + error);
      return;
    }
    res.status(200).json(result);
  });
});
