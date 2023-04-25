/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay=35;
let numberOfDays=0;
let clearDays;
// let contactButton;
// let goBookingRates;
// let goContact;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let calcualtedCost =document.getElementById("calculated-cost");
let mon =document.getElementById("monday");
mon.addEventListener("click",monfunction);
function monfunction()
{
    mon.classList.add("clicked");
    numberOfDays++;
    calculate();

}
let tues =document.getElementById("tuesday");
tues.addEventListener("click" , tuesfunction);
function tuesfunction()
{
    tues.classList.add("clicked");
    numberOfDays++;
    calculate();
}
let wed = document.getElementById("wednesday");
wed.addEventListener("click" , wedfunction);
function wedfunction()
{
    wed.classList.add("clicked");
    numberOfDays++;
    calculate();
}
let thur =document.getElementById("thursday");
thur.addEventListener("click" , thurfunction);
function thurfunction()
{
    thur.classList.add("clicked");
    numberOfDays++;
    calculate();
}
let fri =document.getElementById("friday");
fri.addEventListener("click" , frifunction);
function frifunction()
{
    fri.classList.add("clicked");
    numberOfDays++;
    calculate();
}




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearDays=document.getElementById("clear-button");
clearDays.addEventListener("click" , clear);
function clear()
{
    mon.classList.remove("clicked");
    tues.classList.remove("clicked");
    wed.classList.remove("clicked");
    thur.classList.remove("clicked");
    fri.classList.remove("clicked");
    halfDay.classList.remove("clicked");
    numberOfDays= 0;
    calcualtedCost=0;


    calculate();
}






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let fullDay = document.getElementById("full");
fullDay.addEventListener("click", halfDayRate);
let halfDay = document.getElementById("half");
halfDay.addEventListener("click",halfDayRate);
function halfDayRate()
{
    halfDay.classList.add("clicked");
    fullDay.classList.remove("clicked");
    costPerDay=20;

    calculate();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

// function fullDayRate()
// {
//   fullDay.classList.add("clicked");
//   halfDay.classList.remove("clicked");
//   costPerDay=35;

//   calculate();
// }



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate()
{
   calcualtedCost.innerHTML = costPerDay * numberOfDays;
}
calculate();