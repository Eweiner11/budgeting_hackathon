var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // may have to change db name
  database: 'budget',
});

let createBudgetTable = `create table if not exists budget(id int primary key auto_increment,date varchar(255) not null,description varchar(255) not null, amount int not null, transactionType varchar(255) not null,category varchar(255) not null, accountName varchar(255) not null);`;
connection.query(createBudgetTable, (err, results, fields) => {
  if (err) throw err;
});

let getAllData = (cb) => {
  connection.query(`SELECT * FROM budget`, (err, results, fields) => {
    if (err) throw err;
    cb(results);
  });
};

module.exports.getAllData = getAllData;
