const connection = require('../../db/index.js');
const axios = require('axios');

const getAllNotes = (req, res) => {
  const sql = `SELECT * FROM notes`;

  connection.query(sql, (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });
};

const getEntryNotes = (req, res) => {
  console.log('REQ PARAMETERS', req.params)
  const pid = req.params.note_ref_id;
  const sql = `SELECT * FROM notes WHERE note_ref = 'entries' AND note_ref_id = ${pid};`
  console.log('GET NOTES SQL', sql)

  connection.query(sql, [pid], (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });

};

const addNotes = (req, res) => {
  const data = req.body;
  console.log('ADD NOTES DATA', data);
  const sql = `INSERT INTO notes(title, keywords, notes) VALUES("${data.title}", "${data.keywords}", ${JSON.stringify(req.body.notes)});`

  console.log('SQL STMT', sql);

  connection.query(sql, (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });
};


module.exports = {
  getAllNotes,
  getEntryNotes,
  addNotes
};
