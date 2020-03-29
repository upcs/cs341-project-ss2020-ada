'use strict';
window.onload = function(){
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
    update_user_location_data();
  }
}

function change_page(value) {
    window.location.href = value;
  }
function openNav(){document.getElementById("mySidepanel").style.width = "250px";}
function closeNav() {document.getElementById("mySidepanel").style.width = "0";}
module.exports = {openNav, closeNav}

// updates the user location information box
function update_user_location_data(){
  var loc1_name = localStorage.getItem("loc1_name");
  var loc1_x = localStorage.getItem("loc1x");
  var loc1_y = localStorage.getItem('loc1y');
  var loc2_name = localStorage.getItem("loc2_name");
  var loc2_x = localStorage.getItem('loc2x');
  var loc2_y = localStorage.getItem('loc2y');

  if(loc1_name == '0' || loc1_name == null){
    $('.userloc1').html("No location selected.");
  }
  else{$('.userloc1').html("User location 1: " + loc1_name);
  }
  if(loc2_name == '0' || loc2_name == null){
    $('.userloc2').html("No location selected.");
  }
  else{$('.userloc2').html("User location 2: " + loc2_name);
  }
}

module.exports.update_user_location_data = update_user_location_data();