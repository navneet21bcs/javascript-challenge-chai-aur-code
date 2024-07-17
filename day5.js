//Q1
function checkevenodd(num){
    if(num%2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
checkevenodd(5);
checkevenodd(8);
//Q2
function square(num){
    return num*num;
}
//Q3
 let maxmin=function(a,b){
    return a>b?a:b;
 };
 const min=(a,b)=>a<b?a:b;
    console.log(min(10,5));
console.log(maxmin(10,5));
let concatename=function(a,b){
    return a+b;
};
console.log(concatename("Hello","World"));
const sum=(a,b)=>a+b;
console.log(sum(10,5));
let contain=(a,b)=>a.includes(b);
console.log(contain("Hello","lo"));
//Q4
const multiply=(a,b=1)=>a*b;
console.log(multiply(5));
function greeting(name,age)
{
    console.log(`Hello ${name} your age is ${age}`);
}
greeting("Rahul",20);
