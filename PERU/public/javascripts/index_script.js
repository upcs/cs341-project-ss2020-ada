'use strict';

function change_page(value) {
    window.location.href = value;
  }
  
 module.exports = {
	openNav: function() {document.getElementById("mySidepanel").style.width = "250px";},
	closeNav: function() {document.getElementById("mySidepanel").style.width = "0";}
}