// dbConfig.js
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "jdbc:mysql://localhost:3306/grupo4?createDatabaseIfNotExist=true",
  user: "root",
  password: "admin1234",
  database: "grupo4",
});

module.exports = connection;
