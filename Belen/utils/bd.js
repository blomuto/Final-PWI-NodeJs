const mysql = require("mysql");
const util = require("util");

let pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  password: process.env.DB_PASSWORD || "",
  user: process.env.DB_USER || "root",
  database: process.env.DB_NAME || "test",
  connectionLimit: 10,
});

pool.query = util.promisify(pool.query); //convierto en asincronica la funcion

module.exports = pool;