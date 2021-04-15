const connection = require('../../db/index.js');

const getAllModules = (req, res) => {
  const sql = `SELECT * FROM modules`;

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
  getAllModules,
};
