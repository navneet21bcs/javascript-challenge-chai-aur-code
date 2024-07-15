function check(n)
{
    if(n>0)
    {
        console.log("Positive");
    }
    else if(n<0)
    {
        console.log("Negative");
    }
    else
    {
        console.log("Zero");
    }
}
check(0);
function voted(age)
{
    return age>=18?"Eligible for voting":"Not eligible for voting";
}
console.log(voted(20));
var a=5,b=8,c=10
if(a>b && a>c)
{
    console.log("A is greatest");
}
else if(b>c)
{
    console.log("B is greatest");
}
else
{
    console.log("C is greatest");
}
function printDayOfWeek(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number";
    }
    console.log(dayName);
}
printDayOfWeek(3);
function printgrade()
{
    let marks=80;
    if(marks>=90)
    {
        console.log("Grade A");
    }
    else if(marks>=80)
    {
        console.log("Grade B");
    }
    else if(marks>=70)
    {
        console.log("Grade C");
    }
    else if(marks>=40)
    {
        console.log("Grade D");
    }
   
    else
    {
        console.log("Grade F");
    }
}
printgrade();
const checknumber=(n)=>n%2==0?"Even":"Odd";
console.log(checknumber(5));

function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year");
    }
}
isLeapYear(2020);
