const connection = require('../../db/index.js');

const getAllEntries = (req, res) => {
  const sql = `SELECT entries.id, DATE_FORMAT(entries.entry_date, "%Y-%m-%d") AS entry_date, entries.title, entries.project_id,entries.challenge, entries.keywords, entries.notes, entries.project_name FROM mtj.entries;`;

  connection.query(sql, (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });
};

const getMaxEntryId = (req, res) => {
  const sql = `SELECT max(id) AS max FROM entries`;

  connection.query(sql, (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });
};


const updateEntryNote = (req, res) => {
  const sql = `UPDATE entries SET notes = '${req.body.note}' WHERE id = ${req.body.id}`;

  connection.query(sql, (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });
}


const addEntry = (req, res) => {
    console.log('ENTRIES POST REQ.BODY', req.body);
  const sql =
  `INSERT INTO mtj.entries
    (entry_date,
      title,
      project_id,
      challenge,
      keywords,
      notes,
      project_name)
  VALUES
    (
      now(),
      "${req.body.title}",
      ${req.body.project_id},
      "${req.body.challenge}",
      "${req.body.keywords}",
      ${JSON.stringify(req.body.notes)},
      "${req.body.project_name}");`


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
  getAllEntries,
  updateEntryNote,
  getMaxEntryId,
  addEntry
};