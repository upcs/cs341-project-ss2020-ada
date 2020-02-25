var $ = jQuery.noConflict();
$("#login").click(function() {
  var user = $("#username").val();
  var pass = $("#password").val();
  var found = false; 
  $.post("/users",{usrname: user,  
    usrpw: pass}, function(data) {
      for (var i = 0; i<data.length; i++){
        if(data[i].usrname == user){
          found = true;
        }
    }
    if(found == true){
      alert('User Logged in');
    }
    else{
      alert('username not found');
    }
    }, "json"
    );
});
function return_home() {
  window.location.href = "index.html";
}

function changePage() {
window.location.href = "sign-up.html";
}