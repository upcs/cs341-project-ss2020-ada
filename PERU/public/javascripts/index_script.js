'use strict';
var windowWhoAmI = localStorage.getItem("whoami");

function b(){
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
  return true;
}


function d(){
  $(loginButton).click(function() {
    if(windowWhoAmI != 'null'){
      document.getElementById('loginButton').innerHTML = "Login";
      localStorage.setItem("whoami",'null');
      localStorage.setItem("loc1_name", '0');
      localStorage.setItem("loc2_name", '0');
      localStorage.setItem("loc1x", '0');
      localStorage.setItem("loc1y", '0');
      localStorage.setItem("loc2x", '0');
      localStorage.setItem("loc2y", '0');
      update_user_location_data();
    }
    else{
        return_login();
    }
  });
  return true;
}

$(document).ready(d);

window.onload = b;

function change_page(value) {
    window.location.href = value;
}

function openNav(){document.getElementById("mySidepanel").style.width = "250px";}
function closeNav() {document.getElementById("mySidepanel").style.width = "0";}

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
function return_login() {
  window.location.href = "loginPage.html";
}
module.exports = {openNav, closeNav, update_user_location_data, b, d};