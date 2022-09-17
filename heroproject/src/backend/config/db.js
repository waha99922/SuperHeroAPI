const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "wahab999",
  database: "Hero",
});

module.exports = db;
