let mysql = require('mysql');
let config = require('./config.js');

let connection = mysql.createConnection(config);
let sql = `DELETE FROM todos WHERE id = ?`;

connection.query(sql, 1, (error, results, fields) => {
    if (error) return console.error('error:' + error.message);
    console.log('Delete Row(s):', results.affectedRows)
});

connection.end();
