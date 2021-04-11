const connection = require('../../db/index.js');

const getAllStackTypes = (req, res) => {
  const sql = `SELECT * FROM stacktypes`;

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
  getAllStackTypes,
};
