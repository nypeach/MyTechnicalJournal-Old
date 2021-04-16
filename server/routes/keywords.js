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
  console.log('ADD KEYWORD DATA', data);
  const sql = `INSERT INTO keywords(keyword, stacktype_id) VALUES('${data.keyword}', ${data.stacktype_id});`
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

const addMultipleKeywords = (req, res) => {
  console.log('ADD MULTIPLE KEYWORDS', req.body)
  const sql = `INSERT INTO keywords(keyword) VALUES${req.body};`
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
  getAllKeywords,
  addKeyword,
  addMultipleKeywords
};
