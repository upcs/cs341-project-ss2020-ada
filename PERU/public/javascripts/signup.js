// const button = document.querySelector('.btn')
// const form   = document.querySelector('.form')
// function changePage(value) {
//    console.log("LOL")
//    window.location.href = value;
// }
// button.addEventListener('click', function() {
//    form.classList.add('form--no') 
// });
console.log("jjasjdfjsjfjdfasodijsijdfjasdjsajjajdfs")
$('.btn').click(function(){
   //External Citation: https://www.w3schools.com/jquery/jquery_dom_set.asp
   var user = $('#user').val();
   var email = $('#email').val();
   var password = $('#password').val();
   // Processing the response
   $.post("/newUser",
      { 
         usrname: user,  
         usrpw: password, 
         loc1name: "0", 
         loc1x: "0", 
         loc1y: "0", 
         loc2name: "0", 
         loc2x: "0", 
         loc2y: "0",  
         user_email: email 
      },
      function(status){console.log("Post request sent");}, 
      "json"); 
}); 

/*
$(document).ready(function(){
   console.log("LOL XD")
   $(".btn").click(function(){
      //External Citation: https://www.w3schools.com/jquery/jquery_dom_set.asp
      var user = $(user).val();
      var email = $(email).val();
      var password = $(password).val();
      console.log("LMAOOOO XDDDD");
      // Processing the response
      $.post("/newUser",{ 
         usrname:user,  
         usrpw:password, 
         loc1name: "0", 
         loc1x:0, 
         loc1y: "0", 
         loc2name: "0", 
         loc2x:0, 
         loc2y: "0",  
         user_email: email },
         function(){
            console.log("Post request sent");
         }, 
         "json"); 
   }); 
});*/
