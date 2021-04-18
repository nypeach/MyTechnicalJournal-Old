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

module.exports = connection;

// Execute the mySQLSchema.sql file from the command line by typing:
      // mysql -u root < mySQLSchema.sql
  // to create the database and the tables.
// Make sure you are in the db folder directory