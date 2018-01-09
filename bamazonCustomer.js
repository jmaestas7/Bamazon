var mysql = require("mysql");
var inquirer = require("inquirer");
var jquery = require("jQuery");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "abqNM87105",
    database: "bamazon"
  });

connection.connect( function(err) {
	if (err) throw err;
	//console.log("connected as id " + connection.threadId);
    afterConnection();
    connection.end();
});


function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {

      if (err) throw err;
            console.log("Current Items for sale:\n");
            for(var i = 0; i < res.length; i++) {
                var output = "";
                output += "| Item ID: " + results[i].item_id + " | ";
                output += "Name: " + results[i].product_name + " | ";
                output += "Price: $" + results[i].price + " | ";
                output += "Quantity: " + results[i].stock_quantity + " |";
                items.push({id: results[i].item_id, name: results[i].product_name, price: results[i].price, quantity: results[i].stock_quantity});
                console.log(output);
            }
            console.log("-----------------------------");

      console.log("\n");


      inquirer.prompt([
        // Here we create a basic text prompt.
        {
          type: "input",
          message: 'Which product "iD" would you like to buy?',
          name: "buy"
        },
        {
          type: "input",
          message: "How many units would you like to buy?",
          name: "quantity"
        }
      ])
      .then(function(answer) {
      
        var connect = connection.query("SELECT item_id FROM product", function(err, res) {
         // if (err) throw err;
          var total = answer.buy;
          var inventory = answer.quantity;  


            if (inventory > avail) {
                console.log('Insufficient stock. There are only '+ avail + ' item(s) left.');
            }
            else {
                sell = sell * inventory;
                sell = sell.toFixed(2);
                console.log('Your ' + title + ' has been placed for ' + "$" + sell)
            }

        });
          
      });

  });
};
