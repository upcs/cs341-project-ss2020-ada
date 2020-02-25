var express = require('express');
var router = express.Router(); 
var dbms = require("./dbms.js");
// var body_parser = require('body_parser'); 

/*
@author Sam Lemly
CS341A - Ada PERU
Handling script to process new users.
*/

router.post('/', function(req, res, next){
    // console.log("****************************** \n \n \n ");
    //parse variables from request body
    var usrname =  req.body.usrname,
        usrpw = req.body.usrpw,
        loc1name  = req.body.loc1name,
        loc1x = req.body.loc1x,
        loc1y = req.body.loc1y,
        loc2name  = req.body.loc2name,
        loc2x = req.body.loc2x,
        loc2y = req.body.loc2y,
        user_email = req.body.user_email;

    console.log(usrname);
    console.log(usrpw);

    

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

    // Format insertion string for sql usage.
    var insert_str = "INSERT INTO peru_users VALUES ('"+ usrname +"', '"+ usrpw+"', '"+ loc1name +"', '"+ loc1x +"', '"+ loc1y +"', '"+ loc2name +"', '"+ loc2x+"', '"+ loc2y+"', '"+ user_email +"');"
    console.log(insert_str);
    dbms.dbquery(insert_str,
        function(err, results){
            finishInsert(res);
        }
    );
});

/*
External function that simply logs a success message. 
This inclusion is intended to mirror the behavior seen in orders.js .
The response is passed in case a response is needed at some point.
*/
function finishInsert(res){
    console.log("Successful insertion of new user data into database.");
}

module.exports.router = router;
