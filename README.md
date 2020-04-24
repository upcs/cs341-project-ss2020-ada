[![Codecov Coverage](https://img.shields.io/codecov/c/github/upcs/cs341-project-ss2020-ada/master.svg?style=flat-square)]
(https://codecov.io/gh/upcs/cs341-project-ss2020-ada) 

Timing - before Sprint 5 


    0.110 sec (Chrome) 


    0.001 sec (Chrome) 


    0.010 sec (Chrome) 


    0.109 sec (Safari) 


    0.019 sec (Safari) 


    0.003 sec (Safari) 


    0.018 sec (Chrome) 


    0.012 sec (Chrome) 


    0.010 sec (Chrome) 


    0.002 sec (Firefox) 


    0.001 sec (Firefox) 


    0.001 sec (Firefox) 

Average: 0.024 seconds  


Timing - after Sprint 5:  


    .003 sec (Safari) 


    .002 sec (Safari) 


    .001 sec (Safari) 


    .002 sec (Safari) 


    0.045 sec (Chrome) 


    0.021 sec (Chrome) 


    0.043 sec (Chrome) 


    0.095 sec (Chrome) 


    0.001 sec (Firefox) 


    0.005 sec (Firefox) 


    0.002 sec (Firefox) 


    0.002 sec (Firefox) 
    

Average: 0.018 seconds 


 

Web Compatibility/Known Issues: 


    No known issues exist with compatibility with major browsers (Safari, Chrome, and Firefox) 
    

Final Testing Coverage:  


    37% (Code-Coverage) + 15% (Story Acceptance Tests) = 52% (Overall) 
    

Quality Attributes Discussion: 


    “simple, yet critical” mentality. We kept the user interface as simplistic as possible in order to allow users with any technical background the ability to use our website.  
    

    Usage of well-supported Google platforms minimized the amount of external production tools our team needed to keep track of 
    

    Maintaining a fast loading-speed. With an average loading speed of 0.018 seconds, we were able to achieve our initial goal of having a service that is extremely fast.  
    

    Websites features will all be accessible in one click. Takes one click to get to news page, login, about us page, and to get back to main page.  
    

    User passwords hashed for security purposes.  


    It provides critical information in an easily digestible fashion by keeping the interface and language as simple as possible.  


Security:  


    Hashed user account passwords 
    

    Complexity requirements for user passwords implemented to reduce brute-force attack success rates 


    Input sanitation of user input fields to prevent injection attacks 
    

    Minimization of user-input dependent variables in order to reduce possible attack vectors 
    

Bug Fixes and enhancements reported at the end of Sprint 4:  


    Font size was increased to make it easier to read and use.  
    
    

    Already applied filters: Added a control-switch that checks if a filter has been applied or not. If it already has been applied, the control-switch makes it unable to be applied again until the “clear” button is clicked. 


    Clarity on having to login after registering by redirecting user to the login page.  


    Logout button now displayed on the button bar instead of having to go to login page and click logout.  


    Map Page refresh bug: updated the user data controller to keep track of data-points the user has added outside of their two saved locations. These points disappear on page-refresh.  


    News loading icon/page: added a loading-icon to the news page just in case the page doesn’t load immediately on click. 
