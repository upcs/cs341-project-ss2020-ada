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

