var mySql = require("mySql");
var inqirer = require("inquirer");

var connection = mySql.createConnection({
  host: 'localhost',

  port: 3306,

  password: "Jaydenis17",

  user: "root",

  database: 'bamazon_db'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("You are connected!")
  runSearch();

});

function runSearch() {
  inqirer
    .prompt({
      name: "action",
      type: "list",
      message: "what is the department of the product you would like to buy?",
      choices: ["bakery", "appliances", "bath", "garden", "groceries", "exit"]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "bakery":
          bakerySearch();
          break;

        case "appliances":
          applianceSearch();
          break;

        case "bath":
          bathSearch();
          break;
        case "garden":
          gardenSearch();
          break;
          case "groceries":
              groceriesSearch();
              break;
              case "exit":
                  connection.end();
      }
    });
}

function bakerySearch(){
    inqirer.prompt({
        name: "product_name"
    })
}
