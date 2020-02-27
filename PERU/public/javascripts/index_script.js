'use strict';

function change_page(value) {
    window.location.href = value;
  }
 function openNav(){document.getElementById("mySidepanel").style.width = "250px";}
 function closeNav() {document.getElementById("mySidepanel").style.width = "0";}
 module.exports.openNav;
 module.exports.closeNav;