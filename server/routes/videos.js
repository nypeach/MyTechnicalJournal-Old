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

const addVideo = (req, res) => {
  console.log('VIDEO POST REQ.BODY', req.body);
  const sql =
    `INSERT INTO mtj.videos
    (video_short,
      video_link,
      keywords)
  VALUES
    (
      "${req.body.video_short}",
      "${req.body.video_link}",
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
  getAllVideos,
  addVideo
};