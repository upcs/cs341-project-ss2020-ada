var express = require('express');
var router = express.Router(); 
var dbms = require("./dbms.js");

/*
@author Sam Lemly
CS341A
Handling script to process new customer orders.
*/

router.post('/', function(req, res, next){
    var usrname =  req.body.name; 
    var usrpw = req.body.pw; 
    //parse variables from request body
    var loc1name  = req.body.loc1name;
    var loc1x = req.body.loc1x;
    var loc1y = req.body.loc1y;
    var loc2name  = req.body.loc2name;
    var loc2x = req.body.loc2x;
    var loc2y = req.body.loc2y;


    // generate random order ID. Assumed to be unique.
    var uniqueID = Math.floor(Math.random()*100000); 
    // Format insertion string for sql usage.

/**
 * Database query layout is as follows - 
 * |username|password|loc1_name|loc1x|loc1y|loc2_name|loc2x|loc2y|user_email|
 *  
 * 
 * Datatypes are as follows.
 * |  Field     | Type     | Null | Key | Default | Extra |
 * +------------+----------+------+-----+---------+-------+
 * | username   | char(30) | YES  |     | NULL    |       |
 * | password   | char(30) | YES  |     | NULL    |       |
 * | loc1_name  | char(20) | YES  |     | NULL    |       |
 * | loc1x      | float    | YES  |     | NULL    |       |
 * | loc1y      | float    | YES  |     | NULL    |       |
 * | loc2_name  | char(20) | YES  |     | NULL    |       |
 * | loc2x      | float    | YES  |     | NULL    |       |
 * | loc2y      | float    | YES  |     | NULL    |       |
 * | user_email | char(30) | YES  |     | NULL    |       |
 * 
 */
    var insert_str = "INSERT INTO peru_users " 
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
