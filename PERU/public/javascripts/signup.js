const button = document.querySelector('.btn')
const form   = document.querySelector('.form')

button.addEventListener('click', function() {
   form.classList.add('form--no') 
});

$(".btn").click(function() {
   /*External Citation: https://www.w3schools.com/jquery/jquery_dom_set.asp */
       var user = $("#user").text();
       var email = $("#email").text();
       var password = $("password").text();
       /*Processing the response*/
       $.post("/newUsers",{ usrname:user,  usrpw:password, loc1name: 0, loc1x:0, loc1y: 0, loc2name: 0, loc2x:0, loc2y: 0, user_email: email },
            function(data){
               
           }, "json"); 
    });