const mysql = require('mysql');

// mysql connection
var pool = mysql.createPool({
    // Option 1 [LOCAL DATABASE]: Use lines 6-11 (Delete `/* */` lines 14 & 21) 
    host: process.env.MYSQL_CLOUD_HOST,
    user: process.env.MYSQL_CLOUD_USER,
    password: process.env.MYSQL_CLOUD_PASS,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DB,
    multipleStatements: true

    // Option 2 [CLOUD DATABASE]: Use lines 14-19 (Add `/* */` under line 5 & 12)
    /*
    host: process.env.MYSQL_CLOUD_HOST,
    user: process.env.MYSQL_CLOUD_USER,
    password: process.env.MYSQL_CLOUD_PASS,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DB,
    multipleStatements: true
    */
});

module.exports = pool;
