const mysql = require('mysql');
const util = require('util');

var con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATA_BASE
});

const query = util.promisify(con.query).bind(con);

module.exports = {
  con,
  query
};