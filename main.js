var transactions = [
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'CJ Cherryh',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XS Doodad', price: -0.50 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Basic Gadget', price: -2.00 },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Frederik Pohl',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Clarke Computing',
    items: [
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Neal Stephenson',
    items: [
      { name: 'kilobyte', price: 1024.00 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
    ]
  }
];


// --------------------------------------------------
// EXAMPLE QUESTION
// --------------------------------------------------
/*
  Calculate the total number of transactions.
*/
var totalTransactions = transactions.length;

console.log( 'The total number of transactions is:', totalTransactions );


// --------------------------------------------------
// QUESTION 01
// --------------------------------------------------
/*
  Calculate the total number of 'sales'.

  HINT(S):
  - Not all transactions are 'sales'.
*/
var numSales = 0;

// iterate through transactions
// if the type is 'sale', add 1 to numSales

transactions.forEach(function(transaction) {
  if (transaction.type === 'sale') {
    numSales++;
  }
});

/*
  Hey, welcome to the first question!

  Here's a breakdown of the question, and some pointers on how to get started!
    - A variable has been declared a few lines above (`numSales`).
    - Just below, the contents of the `numSales` variable are logged to the console.
    - Your job is to assign the variable to the correct value (in this case: the total number of sales) *BEFORE* it is logged out.
    - You can do this by:
      - Adding an `=` sign (we are *assigning* something after all)
      - Starting with the `transactions` variable (see the example question);
      - Adding one or more methods to transform/extract the value we're looking for.
      - If your solution is correct, `numSales` should be equal to 5.

  You can solve the remaining questions in the same way!

  P.S.
  The breakdown above takes up a lot of space, feel free to move it to the top or bottom of the file!
*/

console.log( 'The total number of sales is:', numSales );


// --------------------------------------------------
// QUESTION 02
// --------------------------------------------------
/*
  Calculate the total number of 'purchases'.
*/
var numPurchases = 0;

transactions.forEach(function(transaction) {
  if (transaction.type === 'purchase') {
    numPurchases++;
  }
});

console.log( 'The total number of purchases is:', numPurchases );


// --------------------------------------------------
// QUESTION 03
// --------------------------------------------------
/*
  Calculate the total number of 'cash' 'sales'.

  HINT(S):
  - Don't forget that 'purchases' can also be made in 'cash'!
*/
var numCashSales = 0;

transactions.forEach(function(transaction) {
  if (transaction.type === 'sale' && transaction.paymentMethod === 'cash') {
    numCashSales++;
  }
});

console.log( 'The total number of cash sales is:', numCashSales );


// --------------------------------------------------
// QUESTION 04
// --------------------------------------------------
/*
  Calculate the total number of 'credit' 'purchases'.

  HINT(S):
  - Make sure to exclude any 'sales' made by 'credit'!
*/

var creditPurchases = transactions.filter(function(transaction) {
  return transaction.type === 'purchase' && transaction.paymentMethod === 'credit';
});

var numCreditPurchases = creditPurchases.length;

console.log( 'The total number of credit purchases is:', numCreditPurchases );


// --------------------------------------------------
// QUESTION 05
// --------------------------------------------------
/*
  Create an array that includes all of vendors which appear in the transactions data set.
  eg. `[ 'vendor one', 'vendor two', ... ]

  HINT(S):
  - Not all transactions have a 'vendor'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - This array is allowed to contain duplicate values.
*/
var uniqueVendors = [];

// iterate to find which transactions have a vendor
// create a new array of the vendor strings from transactions

transactions.forEach(function(transaction) {
  if (transaction.vendor) {
    uniqueVendors.push(transaction.vendor)
  }
});

console.log( 'The unique vendors are:', uniqueVendors );

var uniqueVendors2 = transactions.reduce(function(new_array, transaction) {
  return [...new_array, transaction.vendor];
}, []).filter(function(vendor) {
  return vendor;
});

console.log( 'Using reduce, the unique vendors are:', uniqueVendors2 );


// --------------------------------------------------
// QUESTION 06
// --------------------------------------------------
/*
  Create an array that includes all of *unique* customers which appear in the transactions data set.
  eg. `[ 'customer one', 'customer two', ... ]

  HINT(S):
  - Not all transactions have a 'customer'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - Make sure that the resulting array *does not* include any duplicates.
*/

// Solution 1
var uniqueCustomers = transactions.map(function(transaction) {
  return transaction.customer
}).filter(function(customer) {
  return customer;
}).filter(function(customer, index, originalArray) {
  return originalArray.indexOf(customer) === index;
});

// Solution 2
// var uniqueCustomers = transactions.filter(function(transaction) {
//   if (transaction.customer) {
//     return transaction;
//   }
// }).map(function(transaction) {
//   return transaction.customer;
// }).filter(function(customer, index, originalArray) {
//   return originalArray.indexOf(customer) === index;
// });

console.log( 'The unique customers are:', uniqueCustomers );


// --------------------------------------------------
// QUESTION 07
// --------------------------------------------------
/*
  Create an array of information about the 'sale' transactions which include 5 or more items.

  The array should resemble the following:
  [ { name: 'Customer Name', numItems: 5 }, ... ]

  HINT(S):
  - There may be more than 1 'sale' that includes 5 or more items.
  - Individual transactions do not have either `name` or `numItems` properties, we'll have to add them to the output.
*/
var bigSpenders;

// iterate through transactions, filter for type: 'sale'
// then filter for items.length >= 5
// iterate through this new array of transactions, and create new array
// of objects with name and numItems attributes

var bigSpenders = transactions.filter(function(transaction) {
  return transaction.type === 'sale' && transaction.items.length >= 5;
}).map(function(transaction) {
  return {
    name: transaction.customer,
    numItems: transaction.items.length
  }
});

console.log( 'The "big spenders" are:', bigSpenders );


// --------------------------------------------------
// QUESTION 08
// --------------------------------------------------
/*
  Calculate the sum of the *first* 'sale' transaction.

  HINT(S):
  - Transactions don't have 'prices', but their 'items' do!
*/
var sumSales;

var sumSales = transactions[0].items.reduce(function(total, item) {
  return total + item.price;
},0);

console.log( 'The sum of all sales is:', sumSales );


// --------------------------------------------------
// QUESTION 09
// --------------------------------------------------
/*
  Calculate the sum of *all* 'purchase' transactions.

  HINT(S):
  - Your solution to 'QUESTION 08' is a good starting point!
  - Make sure to include 'price' information from *all* purchases.
*/

var sumPurchases;

// iterate through transactions, filter for type: 'purchase'
// iterate through filtered transactions array and transform to array of items
// iterate through array of arrays of items, flatten it
// iterate through final array to sum up prices

var sumPurchases = transactions.filter(function(transaction) {
  return transaction.type === 'purchase';
}).map(function(transaction) {
  return transaction.items;
}).reduce(function(newArray, arrayOfItems) {
  return newArray.concat(arrayOfItems);
}, []).reduce(function(total, item) {
  return total + item.price;
}, 0);

console.log( 'The sum of all purchases is:', sumPurchases );


// --------------------------------------------------
// QUESTION 10
// --------------------------------------------------
/*
  Calculate the company's net profit.

  This number will be positive if the sum of the sales is greater than the amount spent on purchases.

  Otherwise, this number will be negative.

  HINT(S):
  - Unlike 'QUESTION 08' and 'QUESTION 09', here we're interested in both 'sale' and 'purchase' transactions.
*/
var netProfit;

// iterate through transactions, make new array of items
// from every transaction
// flatten array
// iterate through flattened array to sum up prices

var netProfit = transactions.map(function(transaction) {
  return transaction.items
}).reduce(function(newArray, arrayOfItems) {
  return newArray.concat(arrayOfItems);
}, []).reduce(function(netProfit, item) {
  return netProfit + item.price;
}, 0);

// Solution 2 using forEach to create a flattened array
// var netProfit = [];
//
// transactions.map(function(transaction) {
//   return transaction.items;
// }).forEach(function(arrayOfItems) {
//   netProfit = netProfit.concat(arrayOfItems);
// })
//
// var netProfit = netProfit.reduce(function(netAmount, item) {
//   return netAmount + item.price;
// }, 0);

console.log( 'The net profit is:', netProfit );


// --------------------------------------------------
// QUESTION 11
// --------------------------------------------------
/*
  Calculate the most items sold as part of single transaction.

  HINTS:
  - The result of this calculation should be a number (not an array, object, or other data type).
*/
var mostItems;

// Solution 1

// iterate through transactions, sort by length of items array length
// into a new array
// return first value

// var mostItemsArray = transactions.sort(function(transaction1, transaction2) {
//   console.log('transaction 1: ' + transaction1);
//   console.log('transaction 2: ' + transaction2);
//   console.log('2 minus 1: ' + (transaction2.items.length - transaction1.items.length));
//   return transaction2.items.length - transaction1.items.length;
// });
//
// mostItems = mostItemsArray[0].items.length

// Solution 2

// iterate through transactions
// if length of items array is > than the current mostItems value
// length of items array becomes the new value of mostItems

mostItems = 0;
transactions.forEach(function(transaction) {
  if (transaction.items.length > mostItems) {
    mostItems = transaction.items.length;
  }
});

console.log( 'The most items sold in a single transaction is:', mostItems );


// --------------------------------------------------
// QUESTION 12
// --------------------------------------------------
/*
  Calculate the sum of the 'purchase' with the fewest items.
*/
var sumOfSmallestPurchase;

// iterate through transactions, create new array of 'purchase' transactions
// sort new array from fewest items to most items
// calculate sum of the first array element's prices

var purchaseTransactions = transactions.map(function(transaction) {
  if (transaction.type === 'purchase') {
    return transaction.items;
  }
}).sort(function(items1, items2) {
  return items1.length - items2.length;
});

sumOfSmallestPurchase = purchaseTransactions[0].reduce(function(sum, item) {
  return sum + item.price;
}, 0);

// sumOfSmallestPurchase =

console.log( 'The sum of the smallest purchase is:', sumOfSmallestPurchase );
