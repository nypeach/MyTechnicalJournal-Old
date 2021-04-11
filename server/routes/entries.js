const connection = require('../../db/index.js');

const getAllEntries = (req, res) => {
  const sql = `SELECT * FROM entries`;

  connection.query(sql, (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });
};



// app.post('/journals', (req, res) => {
//   console.log('REQ.BODY', req.body);
//   let values = `now(), "${req.body.title}", ${1}, "${req.body.challenge}", "${req.body.action_taken}", "${req.body.lesson_learned}"`;
//   console.log(values);
//   db.insertQuery('journal', 'entry_date, title, project_id,challenge, action_taken, lesson_learned', values, (error, result) => {
//     if (error) {
//       res.status(400).json('Query Failed ' + error);
//       return;
//     }
//     res.status(200).json(result);
//   });
// });


module.exports = {
  getAllEntries,
};