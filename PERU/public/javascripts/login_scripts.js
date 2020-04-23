var whoAmI = null;

$(document).ready(function(){
  var windowWhoAmI = localStorage.getItem("whoami");
  /*
  if(windowWhoAmI!='null'){
    $(login).html("Log out");
  }
  */
  $(login).click(function() {
    if(windowWhoAmI == 'null'){
      var user = $(username).val();
      var pass = $(password).val();
      var hashed_pw = CryptoJS.MD5(pass).toString();
      console.log(hashed_pw); 
      $.post("/users",{ usrname: user, password: hashed_pw }, function(data){
        console.log(data);
        console.log("HELLO I AM HERE RIGHT NOW");
        for (var i = 0; i<data.length; i++){
          
          if(data[i].Username == user && data[i].password == hashed_pw){
            console.log("user found");
            console.log(data[i]);
            var found = "true";
            localStorage.setItem("whoami",user);
            localStorage.setItem("loc1_name", data[i].loc1_name);
            localStorage.setItem("loc2_name",data[i].loc2_name);
            localStorage.setItem("loc1x",data[i].loc1x);
            localStorage.setItem("loc1y",data[i].loc1y);
            localStorage.setItem("loc2x",data[i].loc2x);
            localStorage.setItem("loc2y",data[i].loc2y);
          }
        }
        if(found == "true"){
            alert("Welcome Back!");
            console.log("logged in");
            return_home();
        }
        else{
          alert("wrong username or password: try again");
          console.log("wrong username or password");
          console.log(user);
          console.log(pass);
        }
        }, "json"
        );
    }
  });
});

function return_home() {
  window.location.href = "index.html";
}

function changePage() {
  window.location.href = "sign-up.html";
}
