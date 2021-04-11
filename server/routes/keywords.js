const connection = require('../../db/index.js');

const getAllKeywords = (req, res) => {
  const sql = `SELECT * FROM keywords`;

  connection.query(sql, (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });
};


const addKeyword = (req, res) => {
  const data = req.body;
  const sql = `INSERT INTO keywords(keyword, stacktype_id) VALUES(${req.body});`
  console.log('ADD KEYWORD DATA', data);
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
  getAllKeywords,
  addKeyword
};
