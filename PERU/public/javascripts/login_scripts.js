var $ = jQuery.noConflict();
$('#login').click(function() {
  var user = $("#username").val();
  var pass = $("#password").val();

  $.post("/users",{usrname: user,  
    usrpw: pass}, function(data) {
      if(data[0].usrname != -1){
        alert('Username not found!');
      }
      else{
        alert('User logged in');
      }
    }
    );
});
function return_home() {
  window.location.href = "index.html";
}

function changePage() {
window.location.href = "sign-up.html";
}