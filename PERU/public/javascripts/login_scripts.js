var whoAmI = null;

$(document).ready(function(){
  var windowWhoAmI = localStorage.getItem("whoami");
  if(windowWhoAmI!='null'){
    $(login).html("Log out");
  }
  $(login).click(function() {
    if(windowWhoAmI != 'null'){
      alert("You are now logged out");
      localStorage.setItem("whoami",'null');
      return_home();
    }
    else{
      var user = $(username).val();
      var pass = $(password).val();
      $.post("/users",{ usrname: user, password: pass }, function(data){
        for (var i = 0; i<data.length; i++){
          if(data[i].Username == user && data[i].password == pass){
            console.log("user found");
            var found = "true";
            localStorage.setItem("whoami",user);
          }
        }
        if(found == "true"){
            alert("you are logged in");
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