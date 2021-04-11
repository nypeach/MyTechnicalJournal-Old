const connection = require('../../db/index.js');
const axios = require('axios');

const getAllLinks = (req, res) => {
  const sql = `SELECT * FROM links`;

  connection.query(sql, (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });
};

const getEntryLinks = (req, res) => {
  console.log('REQ PARAMETERS', req.params)
  const pid = req.params.linked_ref_id;
  const sql = `SELECT * FROM links WHERE linked_ref = 'entries' AND linked_ref_id = ${pid};`

  connection.query(sql, [pid], (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });

};


// app.post('/links', (req, res) => {
//   console.log('req.body', req.body);
//   let linked_ref = req.query.linked_ref;
//   let linked_ref_id = req.query.linked_ref_id;
//   let values = `"${req.body.url_short}", "${req.body.url_link}", "${req.body.linked_ref}", ${req.body.linked_ref_id}`;
//   console.log(values);
//   db.insertQuery('links', 'url_short, url_link,linked_ref, linked_ref_id', values, (error, result) => {
//     if (error) {
//       res.status(400).json('Query Failed ' + error);
//       return;
//     }
//     res.status(200).json(result);
//   });
// });

module.exports = {
  getAllLinks,
  getEntryLinks
};
