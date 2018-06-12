let mysql = require('mysql');
let config = require('./config.js');

let connection = mysql.createConnection(config);
