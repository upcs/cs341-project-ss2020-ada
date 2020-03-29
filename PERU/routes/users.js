var express = require('express');
var router = express.Router();
var dbms = require("./dbms.js");
/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/
router.post('/', function(req, res, next) {
  console.log("req body");
  console.log(req.body);

  //getting the user from the post 
  var userVar = req.body.usrname;
  var passVar = req.body.password;
  console.log(userVar);
  console.log(passVar);

  /*External Citation: https://stackoverflow.com/questions/41168942/how-to-input-a-nodejs-variable-into-an-sql-query/41172686*/
  dbms.dbquery("Select * FROM peru_users WHERE username='" + userVar + "' and password='" + passVar + "'",
    function(err, data){
        // console.log(data);
        queryData(data, res);
    }
    );
});

/*External Citation: https://stackoverflow.com/questions/26381329/how-to-output-result-of-a-mysql-query-as-a-json-file-in-node-js*/
function queryData(data, res){
  var array = [];

  //send data in json form
    //push data to an array
    for(var i = 0; i<data.length; i++)
    {
      //push data to an array
      array.push({Username: data[i].username,
         password: data[i].password,
         loc1x: data[i].loc1x,
         loc1y: data[i].loc1y,
         loc1_name: data[i].loc1_name,
         loc2x: data[i].loc2x,
         loc2y: data[i].loc2y,
         loc2_name: data[i].loc2_name});
    }
  
  //sending the array back
  res.json(array);
  console.log("pushed data");
}
module.exports.router = router;
