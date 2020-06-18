var dataFormatter = (data) => {
  var moneyTotalsByCategory = {};
  var totalPay = 0;
  var categoryArr = [];
  var totalsArr = [];
  var totalSpent = 0;

  for (var item of data) {
    if (item.Category !== "Paycheck") {
      if (!moneyTotalsByCategory.hasOwnProperty(item.Category)) {
        moneyTotalsByCategory[item.Category] = Math.floor(item.Amount);
      } else {
        moneyTotalsByCategory[item.Category] += Math.floor(item.Amount);
      }
    } else {
      totalPay += item.Amount;
    }
  }

  for (var category in moneyTotalsByCategory) {
    categoryArr.push(category);
    totalsArr.push(moneyTotalsByCategory[category]);
  }

  for (var i = 0; i < totalsArr.length; i++) {
    totalSpent += totalsArr[i];
  }

  return {
    categories: categoryArr,
    totals: totalsArr,
    totalPay: Math.floor(totalPay),
    totalSpent: Math.floor(totalSpent),
  };
};

export default dataFormatter;
