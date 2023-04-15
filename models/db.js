const mysql = require("mysql2");

// database connection
exports.start = mysql.createConnection({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "my-secret-pw",
  database: "nodeapp",
});
