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
  const sql = `INSERT INTO notes(note, note_ref, note_ref_id) VALUES('${data.note}', '${data.note_ref}', ${data.note_ref_id});`
  console.log('SQL STMT', sql);
  console.log('REQ PARAMETERS', req.params)
  const pid = req.params.note_ref_id;
  connection.query(sql, [pid], (err, results) => {
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
