const connection = require('../../db/index.js');

const getAllErrors = (req, res) => {
  const sql = `SELECT e.id, e.error_code, e.error_text, e.error_source, e.notes, e.keywords FROM mtj.errors e;`;

  connection.query(sql, (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });
};

const getMaxErrorId = (req, res) => {
  const sql = `SELECT max(id) AS max FROM errors`;

  connection.query(sql, (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });
};


const updateErrorNote = (req, res) => {
  const sql = `UPDATE errors SET notes = '${req.body.note}' WHERE id = ${req.body.id}`;

  connection.query(sql, (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });
}


const addError = (req, res) => {
    console.log('ERROR POST REQ.BODY', req.body);
  const sql =
  `INSERT INTO mtj.errors
    (error_code,
      error_text,
      error_source,
      notes,
      keywords)
  VALUES
    (
      "${req.body.error_code}",
      "${req.body.error_text}",
      "${req.body.error_source}",
      ${JSON.stringify(req.body.notes)},
      "${req.body.keywords}"
      );`

  console.log('SQL STMT', sql);

    connection.query(sql, (err, results) => {
      if (err) {
        return res.json({
          error: err
        });
      }
      return res.json(results);
    });
}

module.exports = {
  getAllErrors,
  updateErrorNote,
  getMaxErrorId,
  addError
};