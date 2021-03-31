const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mtj'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});


var selectWhereQuery = function (table, condition, callback) {
  connection.query(`SELECT * FROM ${table} WHERE ${condition};`, callback)
};

var selectQuery = function (table, callback) {
  connection.query(`SELECT * FROM ${table};`, callback)
};

var insertQuery = function (table, columns, values, callback) {
  connection.query(`INSERT INTO ${table} (${columns}) VALUES (${values});`, callback)
};

var getKeywords = function (callback) {
  connection.query(`SELECT keyword as value, keyword as label, keyword as keyword FROM keywords;`)
}

module.exports = {
  selectQuery: selectQuery,
  selectWhereQuery: selectWhereQuery,
  insertQuery: insertQuery
}