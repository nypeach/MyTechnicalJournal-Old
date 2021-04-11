const connection = require('../../db/index.js');

const getAllProjects = (req, res) => {
  const sql = `SELECT * FROM projects`;

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
  getAllProjects,
};