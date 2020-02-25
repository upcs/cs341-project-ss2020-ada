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

  //getting the month from the post 
  var userVar = req.body.usrname;
  console.log(userVar);

  /*External Citation: https://stackoverflow.com/questions/41168942/how-to-input-a-nodejs-variable-into-an-sql-query/41172686*/
  dbms.dbquery("Select * FROM peru_users where username='" + userVar + "'",
    function(err, data){
        queryData(data, res);
    }
    );
});

/*External Citation: https://stackoverflow.com/questions/26381329/how-to-output-result-of-a-mysql-query-as-a-json-file-in-node-js*/
function queryData(data, res){
  var array = [];

  //send data in json form
    //push data to an array
     array.push({Username: data[0].username, password: data[0].password});
  
  //sending the array back
  res.json(array);
  console.log("pushed data");
}
module.exports = router;
