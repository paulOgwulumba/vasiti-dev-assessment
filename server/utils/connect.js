let mysql = require('mysql')

Database = {
  connection : mysql.createConnection({
    host: 'remotemysql.com',
    user: 'lqcji0Oanf',
    password: 'NyLOmLFLan',
    database: 'lqcji0Oanf'
  }),
  connect: (connection) => {
    connection.connect((err) => {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
  })}
}

module.exports = Database
