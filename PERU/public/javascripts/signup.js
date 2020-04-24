function c(){
   $('.btn').click(function(event){
      event.preventDefault();
      //External Citation: https://www.w3schools.com/jquery/jquery_dom_set.asp
      var user = $('#user').val();
      var email = $('#email').val();
      var password = $('#password').val();
      var hashed_pw = CryptoJS.MD5(password).toString();
      var message = "User Passwords must match the following complexity requirements:\n -> At least 8 characters long\n -> One Uppercase/Lowercase letter\n -> One digit 0-9\n -> One special character: !@#$%&*()";
      // Null Input validation
      if (user == '' || email == '' || password == '' ){
        alert("Please fill out all requested information");
      } else if(!isStrongPwd1(password)){
        alert(message);
        $('#password').form.reset();
      } else {
      // Processing the response
      $.post("/signUp",{
         usrname: user},
         function(data){
            for (var i = 0; i<data.length; i++){
               console.log(data[i].Username);
               if(data[i].Username == user){
                   console.log("User creation error - user already exists");
                  var found = "true";
               }
            }
              if(found == "true"){
               alert("User already exists. Please pick a new username.");
               console.log("User creation error - user already exists");
              } else{
                console.log("Attempting to insert user...");
                alert("You are registered!");
                insertNewUser(user,email,hashed_pw);
                back2_login();
              }
         }, "json");
       }
   });
   return true;
}

$(document).ready(c);
// Code for password-complexity requirements verification taken from...
// External Citation: http://javaonlineguide.net/2014/09/javascript-code-to-check-password-complexity.html

// Given a password string, check that it's longer than 8 characters, contains at least one
// uppercase/lowercase character as well as a digit and a special character.
function isStrongPwd1(password) {

        var regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
        // Test if the password matches the previous regex
        var validPassword = regExp.test(password);
        return validPassword;
}


// End of functions taken from External Citation:
// http://javaonlineguide.net/2014/09/javascript-code-to-check-password-complexity.html
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

function check(email){
	var pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/
	return pattern.test(email);
}

function back2_login() {
   window.location.href = "loginPage.html";
 }
 
module.exports = {check, insertNewUser, isStrongPwd1, c}