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

let getMonthData = (month, cb) => {
  let otherMonth = month[1] + '/';
  connection.query(
    `SELECT * FROM budget WHERE LOCATE('${month}', date) = 1 UNION SELECT * FROM budget WHERE LOCATE('${otherMonth}', date) = 1`,
    (err, results, fields) => {
      if (err) throw err;
      cb(results);
    }
  );
};

let insertTransaction = (
  date,
  description,
  amount,
  transactionType,
  category,
  accountName,
  cb
) => {
  connection.query(
    `insert into budget (date, description, amount, transactionType, category, accountName) values ('${date}', '${description}', '${amount}', '${transactionType}', '${category}', '${accountName}')`,
    (err, results, fields) => {
      if (err) throw err;
      cb();
    }
  );
};

module.exports.getAllData = getAllData;
module.exports.getMonthData = getMonthData;
module.exports.insertTransaction = insertTransaction;
