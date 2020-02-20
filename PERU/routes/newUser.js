var express = require('express');
var router = express.Router(); 
var dbms = require("./dbms.js");

/*
@author Sam Lemly
CS341A
Handling script to process new customer orders.
*/

/*
Post request response function.
Called from hw2.js in response to the order button being clicked.
Creates a unique ID for the order, and inserts the order into the database.
Simply logs a message with an external function on success. The inclusion of 
the external function is intended to mirror the behavior seen in orders.js .
*/
router.post('/', function(req, res, next){
    var month =  "OCT"; // hardcoded month
    var day = '31'; // this is my birthday
    //parse variables from request body
    var topping = req.body.topping;
    var notes = req.body.notes;
    var quantity = req.body.quantity;
    // generate random order ID. Assumed to be unique.
    var uniqueID = Math.floor(Math.random()*100000); 
    // Format insertion string for sql usage.
    var insert_str = "INSERT INTO ORDERS " 
                + "VALUES ('"
                + uniqueID 
                +"', '" + month
                + "', " + day 
                + ", '" + quantity 
                + "', '"+ topping 
                +"', '"+ notes 
                +"');"
    dbms.dbquery(insert_str,
            function(err, results){
                finishInsert(res);
    });
});

/*
External function that simply logs a success message. 
This inclusion is intended to mirror the behavior seen in orders.js .
The response is passed in case a response is needed at some point.
*/
function finishInsert(res){
    console.log("Successful insertion of new order into database.");
}

//testing function to make sure json is formatted correctly.
//identical to orders.js.
function retrieveOrders(monthQuery){
    return orderData;   
};

module.exports.router = router;
module.exports.retrieveOrders=retrieveOrders;
