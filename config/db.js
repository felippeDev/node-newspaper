const mysql = require('mysql');

const dbConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'node_newspaper'
    });
};

module.exports = () => {
    return dbConnection;
};