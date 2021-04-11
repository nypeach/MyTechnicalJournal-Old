const connection = require('../../db/index.js');

const getAllVideos = (req, res) => {
  const sql = `SELECT * FROM videos`;

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
  getAllVideos,
};