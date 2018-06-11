let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'dahua',
    password: '5haoliner',
    database: 'zhigeng'
});

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

//connection.destroy();
connection.end(function(err) {
    if (err) {
        return console.log('error:' + err.message);
    }
    console.log('Close the database connection.');
});