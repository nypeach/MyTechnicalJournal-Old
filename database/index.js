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


var selectQuery = function (table, callback) {
  connection.query(`SELECT * FROM ${table};`, callback)
};
//var post = {"entry_date": now(), "title": "Connecting MySQL to AWS Server", "project_id": 5, "challenge": "I can't seem to get MySQL connected to AWS Server." , "action_taken": "I tried changing the ports.  Making sure everything was setup correctly.  Opening up public ports.  Setting the ports to 3306.", "lessons_learned": "I needed to create a MySQL user that can be connected to any host not just local host.  CREATE USER 'newuser'@'%' IDENTIFIED BY 'password'; Then grant them permissions. GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'%'; ", "links": "[{"Creating a New User": "https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql"}]"};

var insertQuery = function (table, columns, values, callback) {
  connection.query(`INSERT INTO ${table} (${columns}) VALUES (${values});`, callback)
};

module.exports = {
  selectQuery: selectQuery,
  insertQuery: insertQuery
}