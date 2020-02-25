$(document).ready(function(){
   $('.btn').click(function(event){
      event.preventDefault();
      //External Citation: https://www.w3schools.com/jquery/jquery_dom_set.asp
      var user = $('#user').val();
      var email = $('#email').val();
      var password = $('#password').val();
      // Processing the response
      $.post("/users",{
         usrname: user },
         function(data){
            //console.log(err);
            console.log(data);
            //var found = "false";
   
            for (var i = 0; i<data.length; i++){
               console.log(data[i].Username);
               if(data[i].Username == user){
                  alert("User already exists. Please pick a new username.");
                   console.log("User creation error - user already exists");
                  var found = "true";
               }
            }
            if(found == "true"){
               alert("User already exists. Please pick a new username.");
               console.log("User creation error - user already exists");
            }
            else{
               console.log("Attempting to insert user...");
               insertNewUser(user,email,password);
            }   
         }, "json"); 
   }); 
});

function insertNewUser(user, email, password){
   $.post("/newUser",
         { 
            usrname: user,  
            usrpw: password, 
            loc1name: 0, 
            loc1x: 0, 
            loc1y: 0, 
            loc2name: 0, 
            loc2x: 0, 
            loc2y: 0,  
            user_email: email 
         },
         function(status){
            console.log(status);
         }, 
         "json");
}
