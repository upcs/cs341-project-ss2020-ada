$(".loader").show()
$('div:not(.loader)').hide();
// window.onload = function(){
$(document).ready(function(){
    $(".loader").hide()
    $('div:not(.loader)').show();
    var windowWhoAmI = localStorage.getItem("whoami");
    var currButtonText = "";
    console.log(windowWhoAmI);
    if(windowWhoAmI == null){
      currButtonText = "Login";
      document.getElementById('loginButton').innerHTML = currButtonText;
    }
    else if(windowWhoAmI != 'null'){
      console.log(windowWhoAmI);
      currButtonText = windowWhoAmI + "  logged in. Click to logout.";
      document.getElementById('loginButton').innerHTML = currButtonText;
    }
})

function change_page(page) {
    window.location.href = page;
}
module.exports = {change_page}