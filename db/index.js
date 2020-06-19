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

let createTracker = `create table if not exists tracker(id int primary key auto_increment,Date varchar(255) not null, Amount int not null);`;
connection.query(createTracker, (err, results, fields) => {
  if (err) throw err;
});

let getAllData = (cb) => {
  connection.query(`SELECT * FROM budget`, (err, results, fields) => {
    if (err) throw err;
    cb(results);
  });
};

let getMonthData = (month, cb) => {
  let query;
  let otherMonth = month[1] + '/';
  if (month === '11') {
    query = `SELECT * FROM budget WHERE LOCATE('11', date) = 1`;
  } else if (month === '12') {
    query = `SELECT * FROM budget WHERE LOCATE('12', date) = 1`;
  } else {
    query = `SELECT * FROM budget WHERE LOCATE('${month}', date) = 1 UNION SELECT * FROM budget WHERE LOCATE('${otherMonth}', date) = 1`;
  }
  connection.query(query, (err, results, fields) => {
    if (err) throw err;
    cb(results);
  });
};

let getTrackerData = (month, cb) => {
  connection.query(
    `SELECT * FROM tracker WHERE Date = '${month}'`,
    (err, results, fields) => {
      if (err) throw err;
      cb(results);
    }
  );
};

let updateBudget = (month, value, cb) => {
  connection.query(
    `UPDATE tracker SET Amount = ${value} WHERE Date='${month}';`,
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

let insertBudget = (date, amount, cb) => {
  connection.query(
    `insert into tracker (Date, Amount) values ('${date}', '${amount}')`,
    (err, results, fields) => {
      if (err) throw err;
      cb(results);
    }
  );
};

module.exports.getAllData = getAllData;
module.exports.getMonthData = getMonthData;
module.exports.insertTransaction = insertTransaction;
module.exports.getTrackerData = getTrackerData;
module.exports.insertBudget = insertBudget;
module.exports.updateBudget = updateBudget;
