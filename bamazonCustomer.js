var mySql = require("mySql");
var inqirer = require("inquirer");

var connection = mySql.createConnection({
  host: "localhost",

  port: 3306,

  password: "Jaydenis17",

  user: "root",

  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("You are connected to the database!");
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

function bakerySearch() {
  var query = "SELECT * from products where?";
  connection.query(query, { department_name: "bakery" }, function(err, data) {
    if(err) throw err;
    console.table(data);
    inqirer
      .prompt({
        name: "product_id",
        type: "input",
        message: "What is the id of the product are you looking for?"
      })
      .then(function(answer) {
          var query = "SELECT * from products where?";
          connection.query(query, { item_id: answer.product_id }, function(err, data) {
            if(err) throw err;
           var stock_quantity = data[0].stock_quantity;
           var price = data[0].price;
            var product_id = answer.product_id;      
            inqirer
              .prompt({
                name: "quantity",
                type: "input",
                message: "What quantity do you need?"
            
              }) .then(function(answer) {
                  if(stock_quantity < answer.quantity) {
                      console.log("Insufficient Quantity!");
                      connection.end();
                  }else {
                      var query = "UPDATE products SET? WHERE?";
                      connection.query(query, [
                          {stock_quantity: stock_quantity - answer.quantity},
                           {item_id: product_id }

                        ], function(err, data) {
                            console.log("Thank you for your purchase! Your total is $ " + price * answer.quantity);
                            connection.end();
                        }
                        );
                  }
                  // runSearch();
                
              });
            });
        });
              
        

  });
}

function applianceSearch() {
  var query = "SELECT * from products where?";
  connection.query(query, { department_name: "appliances" }, function(err, data) {
    if(err) throw err;
    console.table(data);
    inqirer
      .prompt({
        name: "product_id",
        type: "input",
        message: "What is the id of the product are you looking for?"
      })
      .then(function(answer) {
          var query = "SELECT * from products where?";
          connection.query(query, { item_id: answer.product_id }, function(err, data) {
            if(err) throw err;
           var stock_quantity = data[0].stock_quantity;
           var price = data[0].price;
            var product_id = answer.product_id;      
            inqirer
              .prompt({
                name: "quantity",
                type: "input",
                message: "What quantity do you need?"
            
              }) .then(function(answer) {
                  if(stock_quantity < answer.quantity) {
                      console.log("Insufficient Quantity!");
                      connection.end();
                  }else {
                      var query = "UPDATE products SET? WHERE?";
                      connection.query(query, [
                          {stock_quantity: stock_quantity - answer.quantity},
                           {item_id: product_id }

                        ], function(err, data) {
                            console.log("Thank you for your purchase! Your total is $ " + price * answer.quantity);
                            connection.end();
                        }
                        );
                  }
                  // runSearch();
                
              });
            });
        });
              
        

  });
}
function bathSearch() {
  var query = "SELECT * from products where?";
  connection.query(query, { department_name: "bath" }, function(err, data) {
    if(err) throw err;
    console.table(data);
    inqirer
      .prompt({
        name: "product_id",
        type: "input",
        message: "What is the id of the product are you looking for?"
      })
      .then(function(answer) {
          var query = "SELECT * from products where?";
          connection.query(query, { item_id: answer.product_id }, function(err, data) {
            if(err) throw err;
           var stock_quantity = data[0].stock_quantity;
           var price = data[0].price;
            var product_id = answer.product_id;      
            inqirer
              .prompt({
                name: "quantity",
                type: "input",
                message: "What quantity do you need?"
            
              }) .then(function(answer) {
                  if(stock_quantity < answer.quantity) {
                      console.log("Insufficient Quantity!");
                      connection.end();
                  }else {
                      var query = "UPDATE products SET? WHERE?";
                      connection.query(query, [
                          {stock_quantity: stock_quantity - answer.quantity},
                           {item_id: product_id }

                        ], function(err, data) {
                            console.log("Thank you for your purchase! Your total is $ " + price * answer.quantity);
                            connection.end();
                        }
                        );
                  }
                  // runSearch();
                
              });
            });
        });
              
        

  });
}
function gardenSearch() {
  var query = "SELECT * from products where?";
  connection.query(query, { department_name: "garden" }, function(err, data) {
    if(err) throw err;
    console.table(data);
    inqirer
      .prompt({
        name: "product_id",
        type: "input",
        message: "What is the id of the product are you looking for?"
      })
      .then(function(answer) {
          var query = "SELECT * from products where?";
          connection.query(query, { item_id: answer.product_id }, function(err, data) {
            if(err) throw err;
           var stock_quantity = data[0].stock_quantity;
           var price = data[0].price;
            var product_id = answer.product_id;      
            inqirer
              .prompt({
                name: "quantity",
                type: "input",
                message: "What quantity do you need?"
            
              }) .then(function(answer) {
                  if(stock_quantity < answer.quantity) {
                      console.log("Insufficient Quantity!");
                      connection.end();
                  }else {
                      var query = "UPDATE products SET? WHERE?";
                      connection.query(query, [
                          {stock_quantity: stock_quantity - answer.quantity},
                           {item_id: product_id }

                        ], function(err, data) {
                            console.log("Thank you for your purchase! Your total is $ " + price * answer.quantity);
                            connection.end();
                        }
                        );
                  }
                  // runSearch();
                
              });
            });
        });
              
        

  });
}

function groceriesSearch() {
  var query = "SELECT * from products where?";
  connection.query(query, { department_name: "groceries" }, function(err, data) {
    if(err) throw err;
    console.table(data);
    inqirer
      .prompt({
        name: "product_id",
        type: "input",
        message: "What is the id of the product are you looking for?"
      })
      .then(function(answer) {
          var query = "SELECT * from products where?";
          connection.query(query, { item_id: answer.product_id }, function(err, data) {
            if(err) throw err;
           var stock_quantity = data[0].stock_quantity;
           var price = data[0].price;
            var product_id = answer.product_id;      
            inqirer
              .prompt({
                name: "quantity",
                type: "input",
                message: "What quantity do you need?"
            
              }) .then(function(answer) {
                  if(stock_quantity < answer.quantity) {
                      console.log("Insufficient Quantity!");
                      connection.end();
                  }else {
                      var query = "UPDATE products SET? WHERE?";
                      connection.query(query, [
                          {stock_quantity: stock_quantity - answer.quantity},
                           {item_id: product_id }

                        ], function(err, data) {
                            console.log("Thank you for your purchase! Your total is $ " + price * answer.quantity);
                            connection.end();
                        }
                        );
                  }
                  // runSearch();
                
              });
            });
        });
              
        

  });
}

function reStock(){
  
}
