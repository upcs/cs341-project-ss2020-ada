'use strict';

var windowWhoAmI = localStorage.getItem("whoami");
var currButtonText = "";
console.log(windowWhoAmI);
if(windowWhoAmI == 'null'){
  currButtonText = "Login";
  $(loginButton).html(currButtonText);
}
else if(windowWhoAmI != 'null'){
  console.log(windowWhoAmI);
  currButtonText = windowWhoAmI + "  logged in. Click to logout.";
  $(loginButton).html(currButtonText);
}


function change_page(value) {
    window.location.href = value;
  }
function openNav(){document.getElementById("mySidepanel").style.width = "250px";}
function closeNav() {document.getElementById("mySidepanel").style.width = "0";}
module.exports = {openNav, closeNav}