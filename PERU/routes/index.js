var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log("req body");
  console.log(req.body);

  //getting the user from the post 
  var insert_str = "INSERT INTO peru_users (loc1name, loc1x, loc1y,loc2name, loc2x,loc2y) VALUES ('" +
                loc1name 
                +"', '"+ loc1x 
                +"', '"+ loc1y 
                +"', '"+ loc2name 
                +"', '"+ loc2x
                +"', '"+ loc2y
                +"')  WHERE username='"+ usrname +"';"

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


/*External Citation: https://stackoverflow.com/questions/26381329/how-to-output-result-of-a-mysql-query-as-a-json-file-in-node-js*/
/*function queryData(data, res){
  var array = [];

  //send data in json form
    //push data to an array
    for(var i = 0; i<data.length; i++)
    {
      //push data to an array
      array.push({loc1Name: data[i].loc1name, loc1x: data[i].loc1x, loc1y: data[i].loc1y});
    }
    
  
  //sending the array back
  res.json(array);
  console.log("pushed data");
} */

module.exports.router = router;
