var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "FoodNutrients"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to Database");
});


module.exports.db = con;