'use strict';
window.onload = function(){
  var windowWhoAmI = localStorage.getItem("whoami");
  var currButtonText = "";
  console.log(windowWhoAmI);
  if(windowWhoAmI == 'null'){
    currButtonText = "Login";
    document.getElementById('loginButton').innerHTML = currButtonText;
  }
  else if(windowWhoAmI != 'null'){
    console.log(windowWhoAmI);
    currButtonText = windowWhoAmI + "  logged in. Click to logout.";
    document.getElementById('loginButton').innerHTML = currButtonText;
  }
}

function change_page(value) {
    window.location.href = value;
  }
function openNav(){document.getElementById("mySidepanel").style.width = "250px";}
function closeNav() {document.getElementById("mySidepanel").style.width = "0";}
module.exports = {openNav, closeNav}