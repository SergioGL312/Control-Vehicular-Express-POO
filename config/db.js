const mysql = require('mysql');
const util = require('util');

class Database {
    constructor() {
        this.connectionLimit = 10;
        this.host = 'localhost';
        this.user = 'root';
        this.database = 'controlvehicular31';

        this.pool = mysql.createPool({
            connectionLimit: this.connectionLimit,
            host: this.host,
            user: this.user,
            database: this.database
        });

        this.pool.query = util.promisify(this.pool.query);
    }

    query(sql, params) {
        return this.pool.query(sql, params);
    }
}

module.exports = new Database();