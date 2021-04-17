const connection = require('../../db/index.js');
const axios = require('axios');

const getAllLinks = (req, res) => {
  const sql = `SELECT * FROM links`;

  connection.query(sql, (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });
};

const getEntryLinks = (req, res) => {
  console.log('REQ PARAMETERS', req.params)
  const pid = req.params.linked_ref_id;
  const sql = `SELECT * FROM links WHERE linked_ref = 'entries' AND linked_ref_id = ${pid};`
  console.log('GET LINKS SQL', sql)

  connection.query(sql, [pid], (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });

};

const getErrorLinks = (req, res) => {
  console.log('REQ PARAMETERS', req.params)
  const pid = req.params.linked_ref_id;
  const sql = `SELECT * FROM links WHERE linked_ref = 'errors' AND linked_ref_id = ${pid};`
  console.log('GET LINKS SQL', sql)

  connection.query(sql, [pid], (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });

};

const addLinks = (req, res) => {
  const data = req.body;
  console.log('ADD LINKS DATA', data);
  const sql = `INSERT INTO links(url_short, url_link, linked_ref, linked_ref_id) VALUES('${data.url_short}', '${data.url_link}', '${data.linked_ref}', ${data.linked_ref_id});`
  console.log('SQL STMT', sql);
  console.log('REQ PARAMETERS', req.params)
  const pid = req.params.linked_ref_id;
  connection.query(sql, [pid], (err, results) => {
    if (err) {
      return res.json({
        error: err
      });
    }
    return res.json(results);
  });
};


const addMultipleLinks = (req, res) => {
  console.log('ADD MULTIPLE LINKS REQ.BODY', req.body)
  const sql = `INSERT INTO links(url_short, url_link, linked_ref, linked_ref_id) VALUES${req.body};`
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
  getAllLinks,
  getEntryLinks,
  getErrorLinks,
  addLinks,
  addMultipleLinks
};
