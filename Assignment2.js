/*
Flo Pease
10/7/22
Week 3 Assignment
*/

 //Gather user input via prompts before page can be accessed
 var firstName = prompt("Operator Login", "<First Name>"); 
 var lastName = prompt("Operator Login", "<Last Name>");
 var badgeNumber = prompt("Operator Login", "<Badge Number>");
 var operatorName = firstName.concat(" ", lastName); //Concatenation puts first and last name together

 //loop to ensure input is valid 
 while(operatorName.length <= 0 || operatorName.length > 20)
 {
     operatorName = prompt("Full name must be between 1 and 20 characters", "<First Name><Last Name>");
 }                     

 while(badgeNumber.length <= 0 || badgeNumber.length > 3)
 {
     badgeNumber = prompt("Badge number should be no more than 3 characters", "<Badge Number>");
 }

function showAlert() {
    var myText="Obtaining access approval, 5 seconds remaining";
    alert(myText)
}

function startTheCountdown() //purpose of function is starting and controling the countdown
{
    let countdown = 10; //variable, what is to change
    let x=0;
    let timeout = 10000; //amount of time from start to finish of button's function
    
    setTimeout(function () {
        document.getElementById("visualcountdown").innerHTML = "Thank you for verifying your credentials, " + operatorName;
        /* document refers to html code, visualcountdown is #Id I gave to the countdown being viewed,
         this tells it what to display at the function's finish*/
        countdown = countdown - 1; //instructs the number displayed to be reduced by one
    }, timeout);
    timeout = timeout - 1000; //amount of time before the number displayed changes
    x++;
    //Must repeat 11 times so each number from 10 down to 1 is in turn displayed plus once more to display message.
    if(x === 5)
{
    showAlert;
}
else if(x < 10) 
{
    setTimeout(function () {
        document.getElementById("visualcountdown").innerHTML = countdown;
        countdown = countdown - 1;
    }, timeout);
    timeout = timeout - 1000;
    x++;
}}
