const mysql = require("mysql");

const db = mysql.createConnection({
	host: "localhost",
	database: "crms",
	user: "root",
	password: "",
});

module.exports = db;
